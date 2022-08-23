import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { fetchBooksList } from '../../api/booksApi';
import { PATH } from '../../constans/routes.js';
import Spinner from '../../Components/SpinnerLoading/Spinner';
import { useSelector } from 'react-redux';
import { isServerError } from '../../store/selectors/serverErrorSelectors';
import ServerError from '../../Components/ServerError/ServerError';
import Words from '../../Components/Words/Words';
import Pagination from '../../Components/Pagination/Pagination';
import './bookContent.scss';

function BookContent() {
	const [fontSizeType, setFontSizeType] = useState('medium');
	const isError = useSelector(isServerError);
	const { bookID } = useParams();

	const [book, setBook] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [wordsPerPage] = useState(300);
	const [words, setWords] = useState(null);
	
	useEffect(() => {
		fetchBooksList().then(({ data }) => {
			const findBook = data.find((bookApi) => bookApi.id === bookID);
			setBook(findBook);
			setWords(findBook.text.split(' '));
		});
	}, [bookID]);
	
	if (book === null && !isError) {
		return <Spinner />;
	}

	const lastWordIndex = currentPage * wordsPerPage;
	const firstWordIndex = lastWordIndex - wordsPerPage;
	const currentWord = words.slice(firstWordIndex, lastWordIndex);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<React.Fragment>
			{isError && <ServerError />}
			{book && (
				<div className="book__wrapper">
					<header className="book__header">
						<Link to={PATH.initialPage}> <AiFillHome className="home-icon" /> </Link>
						<h2 className="book__name"> {book.author + ` "${book.title}"`} </h2>
						<select
							className="book__text-settings"
							defaultValue={'default_value'}
							onChange={(e) => setFontSizeType(e.target.value)}
						>
							<option value="default_value" disabled>Размер шрифта</option>
							<option value="mini">mini</option>
							<option value="medium">medium (default)</option>
							<option value="max">max</option>
						</select>
					</header>
					<main className="book__main">
						<p className="book__word-amount">{words.length} слов/а в тексте!</p>
						<div className="book__page">
						<h4 className="book__active-page">{`Страница ${currentPage} / ${Math.ceil(words.length / wordsPerPage)}`}</h4>
							<div className={'book__text--' + fontSizeType}>
								<Words currentWord={currentWord}/>
							</div>
						</div>
						<Pagination
							wordsPerPage={wordsPerPage} 
							totalWords={words.length} 
							paginate={paginate} currentPage={currentPage} 
							setCurrentPage={setCurrentPage}/>
					</main>
				</div>
			)}
		</React.Fragment>
	);
}

export default BookContent;