//  step2_05.js

$(function() {
	var menu = $('nav>h2');
	menu.on('click', function() {
		var m_p = menu.parent();
		/** // js기능을 사용하면 조금 복잡! css와 같이 연동
			// console.log( m_p.width() );
			// console.log( m_p.width()/2 );
			var unit_rem = 16;
			// console.log( (m_p.width()/2) - (3.8*unit_rem) );
			var moving = ( m_p.width() ) - (3.8*unit_rem);
			var m_p_css = m_p.css('marginRight');
			// console.log(m_p_css);

			if( !(m_p_css == 0) ){
				m_p.stop().animate({'marginRight':-moving}, 500);
			} else if ( !!(m_p_css == 0) ){
				m_p.stop().animate({'marginRight':0}, 500);
			}
		**/
		m_p.toggleClass('moving');

		// addClass, removeClass, toggleClass, hasClass
	});
});