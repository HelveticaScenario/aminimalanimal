###
    Defining jQuery's dollar sign so that I can use it throughout the rest of the encloser. No need to wrap everything in document.ready. Coffeescript has that taken care of for me.
###
$ = jQuery

###
#   With the aid of css, fades the description in
###

$(".project").click (event) ->
    # event.preventDefault()
    element = event.currentTarget
    # console.log element
    # console.log this
    elem = $(element).find('.group_back')
    elem = elem[0]
    # console.log elem
    # Toggle the setting of the classname attribute
    if elem.className is 'group_back fadeOutDown animated'
        elem.className = 'group_back fadeInUp animated'
    else if elem.className is 'group_back fadeInUp animated'
        elem.className = 'group_back fadeOutDown animated'
    else if elem.className is 'group_back'
        elem.className = 'group_back fadeInUp animated'

    # console.log elem.className

    return