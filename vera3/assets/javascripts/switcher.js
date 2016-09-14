;(function( $ , vera ) {
	var swticherTemplate = {
            "defaultUi"       :   '<div class="onoffswitch" {{id}}>'
									  +'<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" {{status}}>'
									  +'<label class="onoffswitch-label" for="myonoffswitch">'
									      +'<span class="onoffswitch-inner"></span>'
									      +'<span class="onoffswitch-switch"></span>'
									  +'</label>'
								  +'</div>'
        };

    function getRandomId(){
    	var timeStamp = new Date().getTime();
    	return 'switcher_' + timeStamp;
    }

    function Switcher( opt ){
		if( opt == "" || opt == null || opt == undefined ){
			opt = {};
		}
		var defaults  = { id : getRandomId() , status : '' , parent : 'body' };
		this.opt      = $.extend( true , defaults ,  opt );
		this.template = swticherTemplate.defaultUi;
	}

    Switcher.fn = Switcher.prototype = {
    	'constructor' : Switcher,
    	'init' : function(){
            this.template = this.template.replace( '{{id}}' , 'id="' + this.opt.id + '"' )
            							 .replace( '{{status}}' , this.opt.status=='on' ? 'checked' : '' );
            this.self = $( this.template );
			$( this.opt.parent).append( this.self );
            return this;
    	},
    	'on' : function(){
            if( !this.self ){
                this.init();
            }
            this.self.find('input[type=checkbox]').prop( 'checked' , true );
            this.self.trigger( 'switcher:on' );
    	},
    	'off' : function(){
            if( !this.self ){
                this.init();
            }
            this.self.find('input[type=checkbox]').prop( 'checked' , false );
            this.self.trigger( 'switcher:off' );
    	},
    	'switcher' : function( opt , callback ){
			if( opt != "on" && opt != "off" ){
				return;
			}

			if( opt == "on" ){
				this.on();
			}
			if( opt == "off" ){
				this.off();
			}
			if(callback){
				callback();
			}
    	},
    	'bindSwitcherEvts' : function(){
    		if( this.opt.events ){
    			if( this.opt.events.on ){
    				this.self.on( 'switcher:on' , function(){
    					this.opt.events.on();
    				}.bind(this));
    			}
    			
    			if(this.opt.events.off){
					this.self.on("switcher:off", function(){
						this.opt.events.off();
					}.bind(this));
				}
    		}
    	}
    };

	vera.Switcher = function( data ){
		var switcher = new Switcher( data );
		switcher.init();
		switcher.bindSwitcherEvts();
		return switcher;
	}; 

	$.fn.switcher = function( opt , callback ){
		var $this = this;
		if( opt != "on" && opt != "off" ){
			console.log("switcher operation error");
			return;
		}

		if( opt == "on" ){
			$this.find('input[type=checkbox]').prop( 'checked' , true );
			$this.trigger( 'switcher:on' );
		}
		if( opt == "off" ){
			$this.find('input[type=checkbox]').prop( 'checked' , false );
			$this.trigger( 'switcher:off' );
		}
		if(callback){
			callback();
		}
	}

	$('body').on( 'tap' , '.onoffswitch' , function(){
		var $status = $(this).find('input[type=checkbox]');
		if( $status.is( ':checked' ) ){
			$status.prop( 'checked' , false );
			$(this).trigger( 'switcher:off' ); 
		}else{
			$status.prop( 'checked' , true );
			$(this).trigger( 'switcher:on' );
		}
	});

})( Zepto , vera )