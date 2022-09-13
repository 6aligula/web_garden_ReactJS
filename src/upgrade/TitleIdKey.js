import React from 'react'

class TitleIdKey extends React.Component {
    render() {
        const {
            idKey,
            title } = this.props
        return (
            <datalist id='products'>
                <option value={idKey}>{title}</option>
            </datalist>
        )
    }

}

export default TitleIdKey