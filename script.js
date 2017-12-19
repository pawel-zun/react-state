// W poprzednim ćwiczeniu nie działały inputy, ponieważ nie było napisanej logiki,
// która obsługiwałaby ich stan od strony komponentu Reacta ;)

var Counter = React.createClass({

	// Metody etapu montowania

	getDefaultProps: function() {
		console.log('Ustawienie domyślnych propsów.');
	},

  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
  	this.setState({
  		counter: this.state.counter -1
  	});
  },

  componentWillMount: function() {
  	console.log('Rzadko wykorzystywana metoda.');
  },
 
  render: function() {
    return React.createElement('div', {className: 'container'},
	    React.createElement('button', {onClick: this.decrement, className: 'btn'}, 'Zmniejsz stan licznika'),
	    React.createElement('span', {className: 'count'}, 'Licznik: ' + this.state.counter),
	    React.createElement('button', {onClick: this.increment, className: 'btn'}, 'Zwiększ stan licznika')
    );
  },

  componentDidMount: function() {
  	console.log('Pobranie danych do komponentu - np. w wyniku wywołania AJAX.');
  },

  // Metody etapu aktualizacji

  componentWillReceiveProps: function() {
  	console.log('Aktualizacja stanu komponentu na podstawie nowych propsów. Warto sprawdzić, czy nowe propsy różnią się od poprzednich.');
  },

  shouldComponentUpdate: function() {
  	console.log('Optymalizacja działania komponentu. Na tym etapie można zdecydować, czy konieczne jest ponowne renderowanie komponentu na drzewie DOM w przypadku zmiany propsów lub stanu. Jeśli nie, to metoda powinna zwracać "false".');
  	return true;
  },

  componentWillUpdate: function() {
  	console.log('Metoda uruchamia się zaraz po tym, jak poprzednia zwróci true. Nie można tu użyć setState, ale można np. rozpocząć animację czy ustawić zmienną na podstawie zmienionego stanu.');
  },

  componendDidUpdate: function() {
  	console.log('Tu można znów bawić się w DOM lub zaktualizować propsy.');
  },

  // Metody etapu odmontowywania

  componentWillUnmount: function() {
  	console.log('Czyszczenie komponentu. Można wywołać anulowanie żądań do serwera, usunąć z DOM zbędne węzły, pozbyć się event listenerów itp.')
  }

});

var CounterBis = React.createClass({
  getInitialState: function() {
    return {
      counter: 10
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
  	this.setState({
  		counter: this.state.counter -1
  	});
  },
 
  render: function() {
    return React.createElement('div', {className: 'container'},
	    React.createElement('button', {onClick: this.decrement, className: 'btn'}, 'Zmniejsz stan licznika'),
	    React.createElement('span', {className: 'count'}, 'Licznik: ' + this.state.counter),
	    React.createElement('button', {onClick: this.increment, className: 'btn'}, 'Zwiększ stan licznika')
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter),
        React.createElement(CounterBis)
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));