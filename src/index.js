const Banner = ({ year = new Date().getFullYear(), style, ...props }) => (
  <a href="https://hackclub.com/" target="_blank" rel="noopener" {...props}>
    <img
      style={{
        width: '230px',
        position: 'absolute',
        top: '10px',
        left: 0,
        border: 0,
        zIndex: '999',
        ...style
      }}
      src={`https://assets.hackclub.com/banners/${year}.svg`}
      alt="Hack Club"
    />
  </a>
)

export default Banner
