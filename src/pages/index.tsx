import { GetStaticProps} from 'next';
import  Head  from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceID :string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
 
  return (
    <>
    <Head>
      <title>Início | ig.news</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Olá, seja Bem-vindo</span>
        <h1>Novidades sobre o <span>React</span>World</h1>
      <p>
        Tenha acesso a todas as publicações <br/>
        <span>Por {product.amount}/mês</span>
      </p>
      <SubscribeButton priceId={product.priceID}/>
     </section>
      <img src="/images/avatar.svg" alt="Mulher dev" />
    </main>
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  const price = await stripe.prices.retrieve('price_1K2LpjFt9qyLEHEBGMOFOi9S', {
  expand: ['product']
   })

   const product = {
     priceId: price.id,
     amount:  new Intl.NumberFormat('pt-BR', {
       style: 'currency',
       currency: 'BRL',
     }).format(price.unit_amount/100),
    }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  }
}