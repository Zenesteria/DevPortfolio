

const moveEle = () => {
    let x=0;
    let y=0;
    let dx=0;
    let dy=0;
    const elements = document.querySelectorAll('[data-move="object"]');



    
    elements.forEach(ele => {

        // Default Styles
        ele.style.position = 'relative';
        ele.style.userSelect = 'none';
        ele.style.cursor = 'pointer';

        const handleMouseMove = (e) => {
            dx = e.clientX - x;
            dy = e.clientY - y;

            

            ele.style.left = `${x - ele.offsetX}px`
            ele.style.top = `${y - ele.offsetY}px`

            x = e.clientX;
            y = e.clientY;

            console.log(x- ele.offsetX);
            console.log(y- ele.offsetY);

            // console.log(`dx: ${dx + ele.offsetLeft}`);
            // console.log(`dy: ${dy}`);
            // console.log(`left: ${ele.style.left}`);
            // console.log(`top: ${ele.style.top}`);
            // console.log(`offsetleft: ${ele.offsetLeft}`);
            // console.log(`offsettop: ${ele.offsetTop}`);
        }

        const handleMouseUp = ( ) => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        ele.addEventListener('mousedown', (e) => {
            e = e || window.event;
            e.preventDefault();

            x = e.clientX;
            y = e.clientY;


            document.addEventListener('mousemove', handleMouseMove);

            document.addEventListener('mouseup', handleMouseUp);
        })
    })
}




export default moveEle;