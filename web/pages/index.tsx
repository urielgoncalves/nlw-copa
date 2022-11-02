interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  // export default function Home(props) {
  // export default function Home() {
  // Test with Javascript enabled
  // With Javascript disabled, it would not work. There we have NextJS
  // fetch('http://localhost:3333/pools/count')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //

  return (
    // <h1>Hello World</h1>
    <h1>Contagem: {props.count}</h1>
  )
}

// Executa na camada de servidor
// Even with Javascript disabled on client side, perform the request on server side
// Count variable value is written on the server console
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }

  // console.log(count)

  // return {
  //   props: {}
  // }
}
