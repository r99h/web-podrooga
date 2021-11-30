import React, {useState, useEffect} from "react";
import './Advice.css';

const text = [
    <text key = {1} phrase ='мы группа podrooga' />,
    <text key = {2} phrase ='мы пишем и играем музыку' />,
    <text key = {3} phrase ='мы вас любим' />,
    <text key = {4} phrase ='<3' />
]

export function Advice() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === text.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 3000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])

    // Вычисляем индекс предыдущего слайда
    const prevTextIndex = activeIndex ? activeIndex - 1 : text.length - 1
    // Вычисляем индекс следующего слайда
    const nextTextIndex = activeIndex === text.length - 1 ? 0 : activeIndex + 1


    return (
        <div className="Advice">
            <div className="Advice-text Advice-text-prev"
                key={prevTextIndex}>
                {text[prevTextIndex]}
            </div>
            <div className="Advice-text"
                key={activeIndex}>
                {text[activeIndex]}
            </div>
            <div className="Advice-text Advice-text-next"
                key={nextTextIndex}>
                {text[nextTextIndex]}
            </div>
        </div>
    )
}
export default Advice;