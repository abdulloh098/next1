import React from 'react';
export const getStaticProps = async () => {
  const bekentdankevotganmalumot = await fetch(
    'https://fakestoreapi.com/products'
  );
  const data = await bekentdankevotganmalumot.json();
  return {
    props: { product: data },
  };
};

const Apiget = ({ product }) => {
  return (
    <div>
      <div className="ota">
        {product?.map((el) => {
          return (
           <div >
             <div className="cart">
              <img src={el.image} alt="" />
              <h3>{el.title}</h3>
              <p>{el.title}</p>
              <button>by</button>
            </div>
           </div>
          );
        })}
      </div>
    </div>
  );
};

export default Apiget;
