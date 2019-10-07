chrome.app.runtime.onLaunched.addListener(
	function () {
		chrome.app.window.create(
                'calc.html',
                
                {
                    
                    frame: { type: "none" }

                }
            ); 
		}
	);
