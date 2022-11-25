import React, { useState } from 'react';
import QuizCard from '../components/QuizCard';
import { questions } from '../data';

const Quiz = () => {
	const lengthOfQues = questions.length;
	const [curQuest, setCurQuest] = useState(3);

	const changeQuestion = (action) => {
		if (action === 'next') {
			if (curQuest === lengthOfQues) {
				return;
			} else {
				setCurQuest((prev) => prev + 1);
			}
		}
		if (action === 'prev') {
			if (curQuest === 1) {
				return;
			} else {
				setCurQuest((prev) => prev - 1);
			}
		}
	};

	return (
		<div className="min-h-[calc(100vh-6rem)] w-full justify-center pt-[80px]">
			<div className="max-w-[693px] w-full mx-auto">
				{questions.map((question, index) => {
					if (curQuest === question.id) {
						return (
							<div key={index}>
								<QuizCard question={question} lengthOfQues={lengthOfQues} />
							</div>
						);
					}
				})}

				<div className="flex items-center justify-between gap-3 mt-[80px]">
					<button className="btn-secondary" onClick={() => changeQuestion('prev')}>
						Previous
					</button>
					<button className="btn-primary" onClick={() => changeQuestion('next')}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
