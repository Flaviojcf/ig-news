import styles from './styles.module.scss'

interface SubscribeButttonProps{
    priceId: string
}

export function SubscribeButton({priceId}:SubscribeButttonProps) {
    return (
        <button type="button" className={styles.subscribeButton}>
            Increva-se agora!
        </button>
    )
}