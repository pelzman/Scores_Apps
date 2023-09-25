
import Card from '../../components/Card'
import Icon1 from "../../assets/Outline.svg"
import Solid from "../../assets/Solid.svg"
const Dashboard = () => {
    return (
        <div className=' flex justify-start items-start gap-8 mt-8 ml-10' >


            <Card title='TOTAL NUMBER OF USERS'>
                <div className='flex justify-between items-center mt-[8px]'>
                    <span className='text-7 not-italic font-semibold text-white font-Roboto'>1,000,000</span>
                    <div className='w-[58px] h-[58px] rounded-full flex justify-center items-center bg-white mt-[-10px]'>
                     <img src={Icon1} alt="" />
                    </div>
                   
                </div>
            </Card>
            <Card title='TOTAL NUMBER OF ADMINS'>
                <div className='flex justify-between items-center mt-[8px]'>
                    <span className='text-7 not-italic font-semibold text-white font-Roboto'>970</span>
                    <div className='w-[58px] h-[58px] rounded-full flex justify-center items-center bg-white mt-[-10px]'>
                        <img src={Solid} alt="" />
                    </div>

                </div>
            </Card>

        </div>
    )
}

export default Dashboard