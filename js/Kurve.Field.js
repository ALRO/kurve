"use strict";

Kurve.Field = {
    
    canvas:             null,
    ctx:                null,
    
    init: function() {
        this.initCanvas();
        this.initContext();
        this.initField();
    },
        
    initCanvas: function() {
        this.canvas         = document.getElementById("canvas");
        this.canvas.width   = window.innerWidth - 40;
        this.canvas.height  = window.innerHeight - 40;
    },
    
    initContext: function() {
        this.ctx = this.canvas.getContext("2d");
    },
    
    initField: function() {
        this.ctx.beginPath();
       
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = Kurve.config.borderColor;
        
        this.ctx.moveTo(0, 0);
        
        this.ctx.lineTo(this.canvas.width, 0);
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.lineTo(0, 0);
        
        this.ctx.stroke();

        this.ctx.beginPath(); //in order to start a new path and let the border keep its style
    },
    
    getRandomPosition: function(borderPadding) {
        if (borderPadding === undefined) borderPadding = 15;
        
        var fieldWidth = this.canvas.width;
        var fieldHeight = this.canvas.height;
        
        var posX = borderPadding + (fieldWidth - 2*borderPadding)*Math.random();
        var posY = borderPadding + (fieldHeight - 2*borderPadding)*Math.random();
        
        return {posX:posX,posY:posY};
    }

};
