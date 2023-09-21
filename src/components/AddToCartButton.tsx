type AddToCartButtonProps = {
  onClick: () => void;
  text: string;
};

function AddToCartButton({ onClick, text }: AddToCartButtonProps) {
  return (
    <button
      onClick={ onClick }
      data-testid="product-add-to-cart"
      style={ {
        background: 'green',
        border: 'none',
        padding: '8px 16px',
        cursor: 'pointer',
      } }
    >
      {text}
    </button>
  );
}

export default AddToCartButton;
