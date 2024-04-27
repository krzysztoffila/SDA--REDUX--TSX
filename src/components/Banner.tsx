type BannerProps = {
  text: string
}

const Banner = (props: BannerProps) => {
  return (
    <h1> {props.text}</h1>
  )
}
export default Banner
