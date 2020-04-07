
export function getFlashInfo(type) {
    switch (type) {
        case 'info':
        case 'information':
        default:
            return {
                class: 'info',
                icon: 'info'
            };
        case 'warning':
        case 'warn':
        case 'alert':
            return {
                class: 'warning',
                icon: 'warning'
            };
        case 'error':
        case 'danger':
            return {
                class: 'error',
                icon: 'warning'
            };
        case 'success':
            return {
                class: 'success',
                icon: 'check'
            };
    }
}

export function getNotificationInfo(type) {
    switch (type) {
        case 'info':
        case 'information':
        default:
            return {
                class: 'info',
                icon: 'info'
            };
        case 'warning':
        case 'warn':
        case 'alert':
            return {
                class: 'alert',
                icon: 'warning'
            };
        case 'error':
        case 'danger':
            return {
                class: 'danger',
                icon: 'warning'
            };
        case 'question':
            return {
                class: 'info',
                icon: 'question'
            };
    }
}
