const ListItem = (props) => {
return (
    <div>
        {
            <div className="text-white flex items-center justify-end w-3/5">
                <div className="flex-cols items-center justify-end w-full text-right px-4">
                    <h3>{props.item.title}</h3>
                    <p>{props.item.content}</p>
                </div>
                <div> 
                <img width='48px' height='48px' src={props.item.src}/>
                </div>
            </div>
        }
    </div>
)
}

export default ListItem;