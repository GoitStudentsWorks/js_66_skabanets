import sprite from '../../images/sprite.svg';
import { getDiscountedProducts } from '../api';
const discountList = document.querySelector('.js-discount-list');
async function renderDiscountProducts() {
  try {
    const discountProducts = await getDiscountedProducts();

    const itemsHTML = discountProducts
      .slice(0, 2)
      .map(
        element => `
          <li class="discount-item" data-id="${element._id}>
            <svg class="discount-icon" width="60" height="60">
              <use href="${sprite}#icon-discount"></use>
            </svg>
            <div class="discount-container-img">
              <img
                src="${element.img}"
                alt="${element.name}-img"
                class="discount-img"
              />
            </div>
            <div class="discount-order">
              <h3 class="discount-name">${element.name}</h3>
              <p class="discount-price">&#36;${element.price}</p>
              <button type="button" class="discount-button js-buy-button">
                <svg class="discount-shopping-icon" width="18" height="18">
                  <use href="${sprite}#icon-shopping-cart"></use>
                </svg>
              </button>
            </div>
          </li>
        `
      )
      .join('');
    discountList.insertAdjacentHTML('beforeend', itemsHTML);
  } catch (error) {
    console.error('Error rendering discount items:', error);
  }
}
renderDiscountProducts();
