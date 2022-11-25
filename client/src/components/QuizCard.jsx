import React from 'react';

const QuizCard = ({ question, lengthOfQues }) => {
	console.log(question);
	const handleSelect = () => {};
	return (
		<div className="">
			<div>
				<h1 className="text-[#F97474] font-medium text-[20px] text-center mb-[14px]">
					Question {question?.id}/{lengthOfQues}
				</h1>
				<p className="text-textDark font-medium text-[24px] mb-[56px] text-center">{question?.question}</p>

				<div>
					{question?.options.map((option, index) => {
						return (
							<label className="flex items-center gap-3 text-textDark py-[19px] px-[30px] bg-[#F1F1F1] hover:bg-[#F97474] hover:text-[#ffffff] rounded-lg w-full mb-[32px]">
								<input
									type="radio"
									value="Trade fare"
									name="answer"
									className="radio radio-xs radio-[#162A56] border border-[#162A56] hover:border-[#fff] w-[18px] h-[18px]"
									onChange={() => handleSelect()}
								/>
								{option}
							</label>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
