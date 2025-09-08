"use client"

import css from "./PuttyItem.module.css"

const PuttyItem = ({ putty }) => {
    const {image,description,price,title } = putty;
  return (
    <div className={css.wrapper}>
              <img className={css.image}
                  src={image}
                  alt="product image"
                  width={130}
              
              />
              <h2 className={css.title}>{title}</h2>
              <p className={css.description}>Опис: {description} </p>
              <h2 className={css.title}>Ціна: {price} </h2>
        </div>
  )
}

export default PuttyItem