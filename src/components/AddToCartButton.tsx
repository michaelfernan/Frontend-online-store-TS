type AddToCartButtonProps = {
  onClick: () => void;
  text: string;
};

function AddToCartButton({ onClick, text }: AddToCartButtonProps) {
  return (
    <button
      onClick={ onClick }
      data-testid="product-add-to-cart"
    >
      {text}
    </button>
  );
}

export default AddToCartButton;
