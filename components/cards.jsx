
export const Cards = ({card , i}) =>{
  if( i == 0 ){
    card.color = '#253665'
  }
    return(
        <div style={{borderColor:card.color}} className={`${i == 0 ? 'main-color':''}  justify-center items-stretch border border-[color:${card.color ? `var(--gray-200,#E4E4E7`:card.color})] bg-white flex grow basis-[0%] flex-col pl-4 pr-4 py-4 rounded-xl border-solid`}>
            <div style={{color:card.color}} className={`text-zinc-500 text-xs font-medium leading-5 tracking-wider uppercase whitespace-nowrap`}>
              {card.title}
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-3">
              <div style={{color:card.color}} className="text-zinc-900 text-xl font-bold leading-8">
                {card.number}
              </div>
            </div>
          </div>
    )
} 