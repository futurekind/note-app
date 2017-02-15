import React, { PropTypes } from 'react'

const Icon = ({
    width,
    height,
    ...props
}) => {
    return (
        <svg width={ width } height={ height } viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
    )
}

Icon.defaultProps = {
    width: 24,
    height: 24
}

Icon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.string,
    id: PropTypes.oneOf([
        'add', 'down', 'up', 'check', 'edit'
    ]),
}

export default Icon