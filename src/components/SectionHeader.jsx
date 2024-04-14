const SectionHeader = ({icon, title, className}) => {
    return (
        <div className={'section__head'}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    )
}
export default SectionHeader

//for title of each part in visit