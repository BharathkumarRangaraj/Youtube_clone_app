import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appslice';
import { YoutubesearchApi } from '../utils/const';

const Header = () => {
  const [searchtext,setsearchtext]=useState('');
  const [suggest,setsuggest]=useState([]);
  const [showsuggetion,setshowsuggetion]=useState(false);

  const dispatch=useDispatch();
  
  useEffect(()=>{
   const timer= setTimeout(() => {
      getsearchapi(); }, 200);  

      return()=>{
        clearTimeout(timer);
      }
  },[searchtext]);

  const getsearchapi=async ()=>{
    const data=await fetch(YoutubesearchApi+searchtext);
    const json=await data.json();
    setsuggest(json[1]);
    
   
}
 const Togglemenuhandler=()=>{
    dispatch(toggleMenu())

  }
  return (
    <div className='grid grid-flow-col shadow-lg py-4 '>
        <div className='flex col-span-1 m-2'>
            <img 
            onClick={()=>Togglemenuhandler()}
            className='h-8 cursor-pointer'  alt='hamburger' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9AQEA2Njbs7Ow9PT06OjoxMTH29vZOTk7V1dVGRkbBwcF4eHgvLy87Ozs0NDR+fn5lZWXk5ORbW1uVlZWysrLIyMhWVlaGhoby8vLe3t5MTEzX19eNjY1TU1Obm5spKSmoqKhtbW0jB6+0AAACc0lEQVR4nO3dC5aiMBBA0RCTgJ/wUYFGu8F2/4sccdoFzOmpqj4z7+7gnUSFUKpzAAAAAAAAAAAAAAAAAAAA5sqNvlKxb2jn2mur53ZQ6jt2KYZCX4ipO2oEbnM0yPst5q184DFbrN9LyPKr2Nmt4Cp20oFDMg0siiT9dtPaLuFjEVvZwLKyfBWuwiz7ubipjQOLot7IFnrrwMJTSCGF1oEUUkghhf9AofVl6ePCVLawHK0Twyh8IvVmvU39m2yg25rfAYuf1ByMTzEO0oFuMjlJfAlxEi90m53dS9HvZN9Iv0xt4+ugr/ZNq7CCT5elu+60XbvlotT3VOrTzAMAAAAA4H8xXbbaLlpnNKt+bCyMvVLfdpdsjkxD2imMJjq3v9kdCYe8lw98N1rAr8T0Ll442s591aN04D6bBhaF+D41fvQk//DpB0xfVsLTl9ZL+FhEZjEopNA6kEIKKaSQwp9fOFn3PQif15zMr7xPsoHuw3qb+g/hwnfz6UvxYwzjEdpGeoD2cQ88W94iRuFvHz5NJ7uNmk4qB9/lklM0mL6MKS8afc/G/jBX2uZDz3giAAAAAAD4Q+Vx2GsbjnqHGJuluuWkLd+qReV7zs7ti8Zo+rIpFEYTnfs0/GnIkD/lA4ebWd/qJv4rreXV9vFauEq/3/Tmz56kh73v1qN78S4bOBlv0nWbyj6cYfpSAdMmFFJIIYUUUkjht02F+XUp05ffdbbepl56LupoXRjF/8LjbHuTn87Sgc51lqvoxf+iZHU3O04MWfgI46Wvso/6fK60fnLAlcO5PWhrzwPTlwAAAAAAAAAAAAAAAAAAAAAAAH/BL66HYRnwmtkmAAAAAElFTkSuQmCC'/>
            <a href='/'>
            <img className='h-6 mx-4' alt='youtube' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAABqCAMAAADDRQtiAAAAxlBMVEX/////AAAoKCgAAAAYGBgTExMdHR0ODg7w8PAjIyOSkpIgICAKCgrJycm8vLzBwcHj4+P4+Pja2tqzs7NhYWF7e3v/amrt7e1sbGz/Xl46OjrPz8//fX11dXX19fVWVlb/hYUtLS1NTU3/x8f/lZWbm5uqqqqMjIyDg4P/qan/srL/4+P/y8ugoKBHR0f/1NT/8fH/vb3/Nzf/i4v/nZ3/WVn/Ly//UVH/6+v/Fhb/k5P/QkL/4OBcXFz/JCT/Pz//cnL/Zmb2lDT9AAAPl0lEQVR4nO2dbUPaPBSGOwqFSlWKKAwmIvgCvoBuON2cz7b//6eeFtrk3GnSFppKmdyfNlrbJFeTnJycJIaRUq77cPtrNhuNHkc3k8nFxcW3wWDwxdfnUL9/s38uLng3fLu4mE8mN94fjWaz21vXddO+b6cc9fBye3czmQ9Onp5fv3/Spx/fX58//xnMJ493ty871O+s2c3Pk68/NOKMI/37z8/H2aZz/DF0N/jvfaCivn7b8c1Z83eqrVK8N5vO/YbU75wSdXq5vORxc2AX+u9j1t2aaRGZB3m84/OG0Xoa5JGvoqtWKRFVc2D7sJF+VtSzInXtfVAj8Y6m9gISXhCvVR6cO9uHTVMN9CpPXtN0iMzj6B33eIf+EjqEF8TKLK/y4NzZFqLW+lLU3HOb5N+eRm/o1GkJmfoHzvtOKa3s81UenDfbAvS1ob5JE3hs0QKo9CM3APz6me4C2l62N5sGSiW1lg+gZM3IQKFhAvt7zQVkbC/bTeME/ZYWQDWe3QFcN/WbUtvKdr5pnKiRLI1D2uZaHfHyuLx22abUlrLdoDdKJqk5dRkPD9FL7OjM2k62d5uGKepFksgedKhmG6+6Zo7ls9R2sv2yaZaiJrJUAj3nEC8K5Gtay2ep7WRbsCb506fPslR26CiovIcX72n5yIa/2bWVbIvikiKSJfMI8AkDWPBclC91Fk+oQ7NORft3T3DNKq3y4DzZFq67/fTpVpLMNo5g8SIUTx4jIK/Zb3WopgDX7qBWeXCebAs2AvL1KEsnlCbyQ8+FpbN0VAK7vVTJ4OPMk+3fTZOM6kKWzmtampUjegk8F9apztJRaQ/ZZrDe8mSrM9BNk/7K0gnGDA5hAXv1SPbXurUVbN1Ng5ToqyyhffBegC0MzbXTlv21bm0F25dNg5RJ2n29UWO4SqaCYqjnpq1gO9s0R5keZCm9ooXgkKkg8FyIQ9+ctBVsCzW/F0o6zwfWMJ0KUkLPUVvBtoBDIMUgyKCeqToZQ4LLytRYNjHaCraF8yb7kscqQ/CFzX8vEVOqvpLfYH1tBdsChdNwyQNrYBjLp4LAY1V5lxHQlrB9Xp/A019tMAX9kZcChVhlU0EK5ET9RrPZbGgdG70HW9dPdZpHtBueojFkWSIcT4y7nBwf0pkgwzgjjS+3h6nnIjICqh2Mp2ao7umVtKxclPIKuaBmm/JZ7IqCbXN8vkz08DLuo9zfa9kse517dKVnIHDi/flEG08qRZgydeLaw/BX6rkoX2POW07V4pdtq2IOo41eE6bv6i1+BcMrq2TWWMlWuMC7CLcEYl5vKdvm0CwH6bYr5lgBtjGum2U+6vez170kn1MGAieLJA+0EeX6Ic9LE3rWsMzojw4N6fcKCKKWlwVgdsV5oiZONVC2AMpJxRZREbYwL2izmSwZ2zEmvNKVNLiGe2zCpxc8t8xemWX29mT5iNsnbUyZ5GwN2VRQD/zM5Ku9l5Bd0hXCJJFtbvUWp3zZ2oMo2/4UfvKz1Y166ppWuSQVW3bxKwOAk/A1d9pDNxRs6Ug2LDbquaBcxmY022HusZErGFu3G62O5cjk1r5pR+4KnxHcnMXleMLfpLvblTodMfginAqiMReVK17GarQeXAjNKBjbYRRtNNy+GZc9Z2lnjjIAIGyNB70+EFnkhYFD2dAk7pIyM5kZfBiXd6GoCsV2fw/C6FmqhgaVKwb1CNlr6mTrte6v2sgqHMoiyJqImzurXEVfxG6k4WpFYlu+FPtawBVqHJ+/5ZeQZaoA2RrGo77VgHcKtnQsu7SJD4kpZbF+NCHvHidiTxWJbUnWIC/up6O7htgqibV40S5l6ShFthonHqTrRgwMvigv8FxGaBuCB8svYm9kL9AmUVWFYru8WK2KjO0uKQZMl2WeT+toWi3c6hda2RoPf/Jl61aE9IMpxZbdYqRaybmqGW3BuCIjz6KxLVvXBwdj0Q7mtoTRB2dLpeNfaU4jy1h/6mWrq9uVLi3w1SIoF70rnQN6C++C1bil6rJU0Lzifq2isXWWQ5iGUHPJx3hEzS0289WFyCIvrVm8SlK2XrerYbSrZEtHs/68ADWl2Hw9LiFhPyMpPqtQLLbVsGPdx4aGGxMYXcTygdGe41zYZmvol5JGsfqiVoTfvdIOmJmSWL4stAotEF4PCsWWrPkf2vIL4GXl7Y9bFX7OMixVsjUeTvJiS5tbf3EI6Vn5uAbiHnlLja0Wj2MuFFvSrV4JFnT4O0Tzkvgw+BYcNye2hjH7nYntQPlgUtw+HdL/sphlXLFJlgdh4AYzPIvElr5d8D2ZYfsDliKZ8IUwbe8byVLB4thmDLJTsz3kLY9fUUnhs6KH2QM6NYQVwQmBFIktjRvpozXFuhxqT9LYP1jN6GU7S0hNPNtMNriabZ8aT/027W7D7xoREofOvnxHlCKxhZga6EM4RfiZtOFgTFWucmVrvPxd99Ff1A8lvYrZIFWUGxXQNtGV1giRhzgUlS3Yw+xSH7PHozJ6Qj+cK1uv2/2qnS3pbaoHZGKI96tYJCSotQ31llkhhWUr7KoVTHIJ+y3xV+NM9jhLKFwatut2uzFsCYny/TXPPW97sSkjG/BhMTLbq7Bs8Vnht4g9S0XRLNU7RhZzNhXb9Ua7MWwNmv43UmDsBkUhisYJg1hYtug6DWcLwCtVsnlEBuTDPnsHtg/ruEfi2J7yAiezmHy4WoMSoT52ZMtiIgvLFo3C0DGFvxK20Fh7ucu9TV5voimO7ZF08poXCvaqMWxDX0dh2R4h28BxjLWZsMXZr27ettTdmlO6cWzb0h1j+LJbtDXUbFnxFpYt7mQYTgqM8QvlbHFLkPN82d6u3SrEsRVspSCLPOi8mZatKf2D4rINHMop2ZbyZJslcnkQ92AcvwZFxd2qvZRtcvHZokUcsj1NyzY/n2Om0MdB3JN7kkaZBLf9O2x7UradtGzzmivIuFJIvpAvlCSGkXgo0rNt79iuzvYl68pP9Ryfr1ZkwQDddTc929q/wJbf7gpsc5mbz75EKJ7tVSTEiE6ffCy2pSEXviEPtjp20FDG1CwUCeGEZbcfjK3NhWWiPxZu3dmBVdhGRkGw7PaDsVVKdwxr5o42kCqGNdBYyB5sPLRju5Tm2PMsrcAqbA+FURBsPLRju5TWNSMat6pSrRkJy0NwKdNltzu2gTSu9dLT0QZKOlJTCO9s0Ws7tkvpW6OZNWoVpVijyXSPJXhFr+3YLqVrbXX2aHOUYm01E3rRcVOmD8a2qjryUc+eCPpPRU5AK8zhfmS2dqOtkI69TGY6F1UHeh+27r/ANmY7/QwAFmx1rcoEKfYg0s3WKDhb+Rzfu7HNZxtXxd5hH42tMDcfLGxSzs1HlGnPP427IIAUe/6lY/uvxtSE0X7p2WYIhnvOYdOwpf68C9sw6rWwbIU4x1PZG+LYbtEeuynZtjF+Vx3nGF4pLFtYvMXik+9VMawRbdHe2CnZCrXTUl1hC3MLy1aIPQ8mRI6UbGsN3Ot3i/a0T8nWKIEI25q0jSsuW+xZQ+8bTpTQ7X0v/Z12691h63i8d9ks6FkUvzKxxdld9VqvcGOJwrJtSdfxCVs7ULaLd9t23bLK/raG23OGTGq2WCSmYlEFL/fCspWvv8VJMBpxQndM83ffKuLZT4mui3i2WLxk8TH6AtiC+qKydTHkj2UEdliiewHSyOXFzmqbBimR9My29GzR2CDz9niBffHCQgSyK2Z2tnxrwdXZCmFhrHM5gz0RyG7gsOe//+ZtOWsxPVtkRSYAwTbh29pgXC/dxnMNtvdS23YttoJBzGLC4N00wjPyu96JVy2aZ2OLsenkzFSY0edtb01RP4TzsNOxlfsbDHErAyVb8g60G/jRoWAoky3FoJ4v6nMBB0EJ0VKJbM+girDo7LaiPotuZtaIC5sApWIrrHzmK76vU7ElZ1cJTTJPL3yLxDcDn9Wid96SM8lXYYtjfnaEhGBjcSME7VFWE9q4LWQ6tsJiJSd8y4EQU63aO8xhrfiZYErx9OIR3uxThGwszrrIMoObkxLRJrAVjKPzvvRXfj/W87AU98W9xVOxFWpbODEX2WJfuZ+js9hW1eh3hN/J4hDwOrKKCyecBE63nOZy1leyKZXAVqiI9a7X97hHQptIjiyIhDtf9npXZ5HFC6nYigvRrOlRc3+vFN1IV8W2ZDnD8V7HEtJEj1rHzsWa7vcNt9eBIgla8DwO+MmkhEUFKdheYYyr7VSrjlCEZNup6C4LZcepLD4PqLrp2L4JC9Hsiuksz3ECWnF7Y9tWObKajR5OJNh4dtWpOg5+C8E2AoXzTL1kZusmhgKW6YH17UgVDVRv0Sqdju19lFXw51eQgBi2MhG3uLiJsOzuMHvaT/fJpudktElsjaOkzOPpiFNbfpfZoLZnOrbRhWhLef0iHYMp2NqKr7KCx3G3Ej5e1irlc6be2kpYU5CKrXEWn3kTj1I9km6PUqrugZsyHVvRvmWvbKJPUMq2fqqo9g5O04oHMojv4v6aQlXcxFipVGxrkaM34A/EY7Kkd1tDrIUp2e5Ly90vbuqzkrP1TKCu7NMwIbreiA6pMHukw9EfX5xBifN7qdgaDUdefRb3t8S7ZUVlLU44XJ2ttMFcHBNH9gdWsPUqd7sS/c7KkQQb9zFH0sGXWyC/Y7K/MR1bo91VGCm27MzRcaRVrkwXw2LSR6Zl65Yin5W5mCumjYCcrT+IbZyL+/BY9PyYUAeKoyTr4lGSOtdpZVJihGNqtr6/QLJZke2cH8puPsYzW+zwNErSR6ZlG/msys6ye+8n9bdLH7fbQWzOmTQmqvEmoWuZb+LxzQ8FcWCk6mwN3w6mK19MxSHt7WvLLJMhqn/471R1IP2B7YS32mVzGnryLk3pa65pAkyzJjxsbLKWtV4xj8PL5yb/k/DWmkneEFS53jBMt12vVsW+lqnXMsnRzXbdG5Z3etHbHgpRc59UuRDVb4BkR/8G2b9sdcvBmd31qeJM8kAHneUx4OXpNffd9uWvqWECIs9qXw6txcNKb1ccfFv2J/Q5rII27t/Oq6ZZPW8dxQQyGv2D8dC/z091921vX3FvHms/VtTPmFxkUL/W9NSoxRVSIP/OtvpLWUlu23tYmpeq1K/VUiWlX2s02/G3jjY8FPqaykLeaT1NNhiD8ZoYt7pTNs1+5rDgMlnP8+Qp25006Nfj/MvzO9nN358G89GO63vr4fbX6GYy/3Ly9Pz6XVtX/OP76/PTyWA+uRn9ekkMQ97pXeS67svtbHY3Gj16yCfzi4uLga8vC/39HOhk+f/FJe+W+cSD+Dga3c1mty/eIzadi4+k/wGIwbz9hD1h2QAAAABJRU5ErkJggg=='/>
    </a>
        </div>
       
        <div className='col-span-10 '>
          <div>
            <input 
            value={searchtext}
            onChange={(e)=>setsearchtext(e.target.value)}
            onFocus={()=>setshowsuggetion(true)}
            onBlur={()=>setshowsuggetion(false)}

            
            className='border border-gray-300 w-1/2 rounded-l-full bg-gray-200 h-10'  type='text'/>
            <button className='border border-gray-300  rounded-r-full bg-gray-100 w-16 h-10'>Search</button>
            </div>
            <div className='bg-white rounded-lg py-2 px-2 shadow-lg border border-gray-200'>
              {showsuggetion && <ul className='fixed w-[32rem]'>
                {
                  suggest.map((s)=><li key={s} className=' bg-white py-2 px-2 shadow-sm  hover:bg-gray-200'>{"🔎"+ s}</li>)
                }
                
                
              
              </ul>}
            </div>
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt='prof' src='data:image/png;base64,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'/>
        </div>

    </div>
  )
}

export default Header;