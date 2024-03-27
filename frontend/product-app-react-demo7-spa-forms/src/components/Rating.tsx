 interface RatingProps {
    rating : number
 }
 
 const Rating = (props : RatingProps) => {
    return (
        <div style={{width: props.rating * 79/5 ,overflow:"hidden"}}>
           <div style={{width:81}}>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
           </div>
        </div>
    )
 }

 export default Rating;