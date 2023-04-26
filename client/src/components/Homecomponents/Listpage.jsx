import React from "react";
import Earphone from "./Earphone";
import headphone from '../../../public/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import earphone from '../../../public/images/home/desktop/image-earphones-yx1.jpg'
import speaker from '../../../public/images/home/desktop/image-speaker-zx9.png'
export default function Listpage()
{
    return (
 

<div className=" mt-14  flex flex-col lg:flex-row">
    
<Earphone img={headphone}  name="Headphone" link="/headphone" />
<Earphone img={earphone} name=" Earphone" link="/earphone" />
<Earphone img={speaker} name="Speaker" link="/speaker"/>
</div>


    )
}
