$(document).ready(function(){
    $(".tooltip").lyltip({
        theme: "dark",  // Principal theme
        themes: { 		// Custom elements themes
            "tooltip-info": "info",
            "tooltip-success": "success",
            "tooltip-warning": "warning",
            "tooltip-danger": "danger",
            "tooltip-light": "light",
        },
        margin: 18
    });
});
