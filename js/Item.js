export const Item = ({ text, isDone }) => `<li class="item">
            <div>
                <input type="checkbox" ${isDone ? "checked" : ""}>
                <span>${text}</span>
            </div>
            <button class="btn-close" type="button">
            <img src="./src/cross.svg" alt="" width="15" height="15">
            </button>
        </li>`;
