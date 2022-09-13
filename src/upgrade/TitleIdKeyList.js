import React from 'react'
import TitleIdKey from './TitleIdKey'

const TitleIdKeyList = ({ titleIdKeys }) => {
    return (
        <div>

            {titleIdKeys.map((titleIdKey) => {
                return (

                    <React.Fragment key={titleIdKey.id}>
                        <TitleIdKey
                            idKey={titleIdKey.id}
                            title={titleIdKey.title} />
                    </React.Fragment>

                )
            })}
        </div>
    )
}

export default TitleIdKeyList
