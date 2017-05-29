CREATE TABLE IF NOT EXISTS `timovi` (
  `tim_id` int(4) NOT NULL AUTO_INCREMENT,
  `datum_unosa` date NOT NULL,
  `sport` varchar(60) NOT NULL,
  `datum` varchar(30) NOT NULL,
  `vreme` varchar(30) NOT NULL,
  `grad` varchar(30) NOT NULL,
  `adresa` varchar(30) NOT NULL,
  `objekat` varchar(30) NOT NULL,
  `broj_igraca` int(10) NOT NULL,
  `starost` varchar(30) NOT NULL,
  `cena` varchar(30) NOT NULL,
  `napomena` varchar(1000) NOT NULL,
  `telefon` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`tim_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `igraci` (
  `igrac_id` int(4) NOT NULL AUTO_INCREMENT,
  `datum_unosa` date NOT NULL,
  `ime` varchar(60) NOT NULL,
  `sport` varchar(60) NOT NULL,
  `grad` varchar(30) NOT NULL,
  `starost` varchar(30) NOT NULL,
  `napomena` varchar(1000) NOT NULL,
  `telefon` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`igrac_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

INSERT INTO `timovi` ( `datum_unosa`, `sport`, `datum`, `vreme`, `grad`, `adresa`, `objekat`, `broj_igraca`, `starost`, `cena`, `napomena`, `telefon`, `email`) VALUES
( CURRENT_TIMESTAMP,'Kosarka', '04/22/2017', '12:30','Beograd','Bircaninova 4','Balonu',2,'20-30','230','Igramo laksi fudbal, ne jurimo mnogo pa mogu i debeljani da se jave (ne sluzimo sendvice)','060/1234567','test@test.com');