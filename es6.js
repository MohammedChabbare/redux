
  ///////////////////////// Object Reducer Example ////////////////////////////////////
  const updateNameReducer = (state = {}, actions) => {
    let {qte = '', index = 0} = actions;
    switch (actions.type) {
      case 'UPDATE': return Object.assign({}, state, {qte: qte,index: index});
      default: return state
    }
  }
  const updateNameStore = Redux.createStore(updateNameReducer)
  $('input[name="qte"]').on('input', function(e) {
    updateNameStore.dispatch({type: 'UPDATE', qte: e.target.value, index: $(this).attr("index")});
  });

  updateNameStore.subscribe(() => {
    let {qte,index} = updateNameStore.getState();
    let price = parseInt($('.calcu'+index).attr("price")) * parseInt(qte)
    $('.calcu'+index).html(price + " &euro;");
    console.log(updateNameStore.getState());
  });