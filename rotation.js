AFRAME.registerComponent("diver-rotation-reader",{
    schema:{
        speedOFRotation:{type:"number", default:0},
        speedOfAscent:{type:"number", default:0}
    },

    init:function(){
        window.addEventListener("keydown", (e)=>{
            // Get data Attributes
            this.data.speedOFRotation = this.el.getAttribute("rotation") 
            this.data.speedOfAscent = this.el.getAttribute("position")

            var diverRotation = this.data.speedOFRotation
            var diverPosition = this.data.speedOfAscent

            // Control the Attributes with the Arrow keys
            if(e.key === "ArrowRight"){
                if(diverRotation.x < 10){            
                    diverRotation.x = diverRotation.x + 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
            }
            if(e.key === "ArrowLeft"){
                if(diverRotation.x  > -10){
                    diverRotation.x = diverRotation.x - 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
            }
            if(e.key === "ArrowUp"){
                if(diverRotation.z < 20){
                    diverRotation.z = diverRotation.z + 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
                if(diverPosition < 2){
                    diverPosition.y = diverPosition.y + 0.01
                    this.el.setAttribute("position", diverPosition)
                }
            }
            if(e.key === "ArrowDown"){
                if(diverRotation.z > 10){
                    diverRotation.z = diverRotation.z - 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
                if(diverPosition.y > -2){
                    diverPosition.y = diverPosition.y - 0.01
                    this.el.setAttribute("position", diverPosition);
                }
            }
        })
    },
})