import { getFlashInfo, getNotificationInfo } from './util';

import styles from './index.module.css';


export function addFlashMessage(message, { type = 'info', hideAfter = '5s' } = {}) {
    let container = document.getElementById('flash_message_holder');

    if (container === null) return;

    let typeInfo = getFlashInfo(type);

    container.insertAdjacentHTML('afterbegin', `
        <li class="ic-flash-${typeInfo.class} ${styles.message} ${styles.hide}"
            ${hideAfter ? `style="animation-delay: ${hideAfter};"` : ''}>
            <div class="ic-flash__icon">
                <i class="icon-${typeInfo.icon}"></i>
            </div>
            ${message}
            <button type="button" class="Button Button--icon-action close_link">
                <i class="icon-x"></i>
            </button>
        </li>
    `);

    container.firstElementChild.addEventListener('animationend', event => {
        //event.target.remove();
    });
}

export function addNotification(title, message, { type = 'info', canClose = true, hideAfter = false } = {}) {
    let container = document.getElementById(styles.contentMessageHolder);

    if (container === null) {
        let content = document.getElementById('content');

        if (content === null) return;

        content.insertAdjacentHTML('afterbegin', `
            <ul id="${styles.contentMessageHolder}">
            </ul>
        `);

        container = document.getElementById(styles.contentMessageHolder);
    }

    let typeInfo = getNotificationInfo(type);

    container.insertAdjacentHTML('beforeend', `
        <div class="ic-notification ic-notification--admin-created
                    ic-notification--${typeInfo.class} ${styles.message} ${hideAfter ? styles.hide : ''}"
             ${hideAfter ? `style="animation-delay: ${hideAfter};"` : ''}>
            <div class="ic-notification__icon">
                <i class="icon-${typeInfo.icon}"></i>
            </div>
            <div class="notification_account_content">
                <div class="ic-notification__content">
                    <div class="ic-notification__message">
                        <h4 class="ic-notification__title">
                            ${title}
                        </h4>
                        <span class="notification_message">
                            ${message}
                        </span>
                    </div>
                    <div class="ic-notification__actions">
                        ${canClose ? `
                            <a href="#" class="Button Button--icon-action" title="Remove">
                                <i class="icon-x"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `);

    if (hideAfter) {
        container.lastElementChild.addEventListener('animationend', event => {
            event.target.remove();
        });
    }

    if (canClose) {
        container.lastElementChild.addEventListener('click', event => {
            let button = event.target.closest('.Button--icon-action');

            if (button === null) return;

            event.preventDefault();

            event.target.closest('.ic-notification').remove();
        });
    }
}

export default {
    addFlashMessage,
    addNotification
};
