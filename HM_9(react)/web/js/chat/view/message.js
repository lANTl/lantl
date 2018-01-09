function messagesView(id, messages) {
    var elements = messages.map(function (message) {
        return React.createElement(
            'li',
            {className: "message"},
            message.text,
            React.createElement(
                'button',
                {type: "button"},
                "Delete"
            )
        );

    });

    ReactDOM.render(elements, document.getElementById(id));

}