import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

function Paragraph() {
    const context = useContext(ThemeContext)

    return(
        <p className={context.theme}>
            Cô đơn trên sofa con tim như tan ra
            Dẫn lối em trôi theo một khúc ca buồn
            Giữa căn phòng ánh đèn chợt tắt
            Che đi giọt buồn sắp rơi
            Cô đơn trên sofa sao anh yêu cô ta
            Chẳng phải anh yêu em hơn cả anh mà
            Để cho thanh xuân này chợt tắt
            Trên mi giọt nước mắt rơi
            Thì ra là thế tình nào là tình chẳng mờ phai tháng năm
            Một ngày vẫn trôi đôi môi em phai màu nắng
            Nếu không em thì anh có buồn
            Hoá ra chỉ mình em đáng thương
        </p>
    )
}

export default Paragraph
