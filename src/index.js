import React from 'react'
import PropTypes from 'prop-types'

const Banner = ({ year = new Date().getFullYear(), style, ...props }) => (
  <a href="https://hackclub.com/" target="_blank" {...props}>
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

Banner.propTypes = {
  year: PropTypes.oneOf([2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]),
  style: PropTypes.object
}

export default Banner
