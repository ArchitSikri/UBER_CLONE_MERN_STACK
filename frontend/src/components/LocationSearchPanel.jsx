const LocationSearchPanel = ({ suggestions, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        setPanelOpen(false)
    }

    return (
        <div>
            {/* Display fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <button key={elem} type='button' onClick={() => handleSuggestionClick(elem)} className='my-2 flex w-full items-center gap-4 rounded-xl border border-slate-100 p-3 text-left transition hover:border-slate-300 hover:bg-slate-50 active:border-slate-950'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </button>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel
