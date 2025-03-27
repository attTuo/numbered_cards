
export default function CreateDeckForm() {
  
  return(
    <form
      className="flex flex-col justify-center space-y-4 border border-blue-300 px-5 py-10 w-72"
      action=""
    >
      <div className="flex flex-col">
        <label htmlFor="card_input">Number of cards:</label>
        <input name="card_input" id="card_input" type="number" min={2} max={99} className="bg-gray-300" />
      </div>
      
      
      <div className="flex space-x-2">
        <label htmlFor="shuffle_checkbox">Shuffle deck:</label>
        <input name="shuffle_checkbox" id="shuffle_checkbox" type="checkbox" defaultChecked className="hover:cursor-pointer" />
      </div>
      
      <button
        className="bg-primary-background hover:bg-amber-500"
        type="submit"
      >
        Create deck
      </button>

    </form>
  )
}