import { SearchInput } from "../../widgets/Header/ui/SearchInput/SearchInput";
import { MainCarousel } from "../../widgets/MainCarousel/MainCarousel";
import { ShopLatest } from "../../widgets/ShopLatest";
import cls from './Home.module.scss'
const Home = () => {
 return (
  <div className={cls.content}>
   <SearchInput />
   <MainCarousel />
   <ShopLatest />
  </div>
 )
}

export default Home;
