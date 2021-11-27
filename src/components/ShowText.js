import React,{ useState } from 'react'

const ShowText = props => {
    const [showMore, setShowMore] = useState(false)

    const text = props.children

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <>
            {!showMore ? text.slice(0, 450) : text}
            <a onClick={toggleShowMore} href="/#" className={props.className}>
                {!showMore ? "...đọc thêm" : "...hiện ít hơn"}
            </a>
        </>
    )
}

export default ShowText
