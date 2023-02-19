const ListItem = (props) => {
    return (
        <div>
            {
                <div className="text-white flex items-start justify-end py-10 w-3/5">
                    <div className="flex-cols items-center justify-end w-full text-right px-4 w-2/5">
                        <h3 className="text-3xl text-orange-400">{props.item.title}</h3>
                        <p className="text-2xl px-1">{props.item.content}</p>
                    </div>
                    <div>
                        <img width='72px' src={props.item.src} />
                    </div>
                </div>
            }
        </div>
    )
}

export default ListItem;