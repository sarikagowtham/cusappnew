import React, { Component } from "react";
import {View,StyleSheet,SafeAreaView,ScrollView,Dimensions} from "react-native";
import { Body,Thumbnail,Text,List,ListItem, Container} from 'native-base';
import {Card} from 'react-native-elements'
const { height, width } = Dimensions.get('window')

class Hometemp extends Component {
    state={isFocused:false,
        isClicked1:false,
        isClicked2:false,
        isClicked3:false,
        isClicked4:false}
    
        handleSubmit1=event=>{
          this.setState({isClicked1:true});
       
        }
        handleSubmit2=event=>{
          this.setState({isClicked2:true});
       
        }
        handleSubmit3=event=>{
          this.setState({isClicked3:true});
       
        }
        handleSubmit4=event=>{
          this.setState({isClicked4:true});
       
        }

  
    
      handleFocus=event=>{
        this.setState({isFocused:true});
    
        if(this.props.onFocus)
          this.props.onFocus(event)
      }
    render() {
        const{isFocused}=this.state;
        const {onFocus}=this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        scrollEventThrottle={16}>
                         
                       
                            <View style={{justifyContent: "space-between", marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                
                                
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGC_BlPgj8VGJJzsmlD3OHa2Nv5uDPUPdJFRbIVXb8eezd6Up' }} />
                                 <Text onPress={this.handleSubmit1}>Rice</Text>
                                 </Body>
                                 </Card>
                                 
                                  
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyETJg-qQQLtdxoieKnA8cPiL8xo_Dzk5HHoQmpkLYfBoOUB1' }} />
                                 <Text onPress={this.handleSubmit2}>Oil</Text>
                                 </Body>
                                 </Card>
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjq6E5lD096mZVT91odXssJm92Gs-0rg1jdvHnqaYtCC-yGFsYNA' }} />
                                 <Text  onPress={this.handleSubmit3}>Dhal</Text>
                                 </Body>
                                 </Card>
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGR0bFxgYGBkgHxghIBgYGhsbHxodHSggIBslHSAXITEhJSkrLi4uGiAzODMsNygtLisBCgoKDg0OGxAQGy8lICUtNTc1LS0tLS0tLS8vLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xABGEAABAgQEAwUEBwYFBAEFAAABAhEAAwQhBRIxQQZRYRMicYGRMqGx0QdCUmLB4fAUI3KCkvEVFjOi0iRTwuJzF0STsvL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAuEQACAgIBAwQBBAEEAwAAAAABAgARAyESBDFBEyJRYRQycYGRQiOxwfAFUtH/2gAMAwEAAhEDEQA/ANxjo6FHHOIF5yiWQJYtmBuo7sW08OUJkyBBZjKpPaFsTx5MslKE51aaskHkTz6AQKkcWqB/ey0lO5QdPI6+ogVLdQsfUN6Dd+kDKmUybBzoE83Yg8owP1T3Yl1xCacayX2fa5xkZ8z2bYwEncWyR7KVHkSwB/H3Rm3EVbOC5chU4JlpST2bOQSp7AHXW922j5KnIDFSlAbZ7e46+UO/VN/jOTAD3j8njK4KpQy9FX94hjw7EZc5OaWp+Y3T0IjLaeYlY7jt1Af+0WKDGVUsxEwklD5VNuD0HL8IXH1TA00L4RWpqsdCTjvHfZrMqRKzqBHeV7JDOWSDmO3Lc+IUfSRUby5J8l/8ovk63EhomRXEx7TUI6E/hzjdM9aZUxAQtVkkF0k8r3B9Y7iLjlElRlykiYpJZSiWSCNQGuojQ7PDflYuHO9QcGuo4R0BeH8c7ekRUzEhBVmdIL+ytSbWGrO3WPdTiin7iQ33tfQGKeqtA3BxMLx0BpeMk2y97xt4xXXXTdc3w+DQDmUQhDCdfX9mWCXLPqwEVpWNX76WHMF28QzwtzcUKpjqL5vwDfrxgjLAKXGkZznblrtKDGK3GhCwQCC4Ohj1CPiOPTqWU8pKVALDhTlgeTEbt6mAXE/GxmGmMpSpeYTO0QFEFKklF3GoY2PU7gxQ9SoH38QLgZj9TVYqYpicqnlmZOWEIFnO52AAuT0F4TuHeLlBQRUKCkH2ZhsU/wAWxHXb4JP0oY6qdiBkpWQmnASm9ishKlkjc3Sn+U8zHfkqycljDp2D8WmwYFjkirlmZIWFpBKTsUkbEG4Oh8CIV/pF4umUa5EpDIE1z2pALMQCGNmuCTfURnOEY/OkKK5UwpKrKAYpV4g2cX6h3FnhU4zrapU3tpyzMl3CXJZHMX3dr7wqdRz9vYxmwemeXcTVafjibJm9+cJyS2ZCgHFwCUqA8eloaq3j6lQSEFUxtSlgn1UQ/iAY/Ps2kqQl1JUpAY5095LWLgja7P4wyYFPklISopH3lsH6AXdokcj4xV/8xzjRt1NVpvpFkrWlCZZuoAkqAABIGZyNnBPxhrxCvlyEGZNWEIGpPwHM9BGFYpTU8kdsmcCWOVOYF7EFk9OtrQtYxxNPnhAXMUQhCUJBUTlAABud1G5PloAIfHncg+Ynogn4m1V/0lSU/wClKUvlmUEZuoFy3iBFSX9JxWO7S3/+R/gl4wVc+Yo+0Sd/1yi1TV8yWRkUR5awjPm/9hLLixfE3NP0jqB79OG3AWQfeln6P5wyYDxZTVRypUUTP+2uyvLZXkTGBSeIyoBM47MCmzeMXJdblISsg3BSsbcjmG3UesKnUZV/VA/Tr4n6PjoQOCeNcxFPVK77tLmlhn5JV97kd/HV/jfjyBxYmJlKmjOjo6Oh4so43UdnImrdmSWPImw98ZzKXLAJSSgDVtD1/ONFx+WFU04EP+7UfQEj3tGWU6ipJ5kM4A8m+Uef1xIqpowC5eRiKV5mJt3UqFgofhePk+tyABAHdGp25qUeb2AgBT4ShGWcZihbRze51bY/KBuMY/8AVSppY1OhPKw90eaoLmhNRUCDOKa//q0qQo+yxWz33IvEeF44lC2mFK3/AO4dPAc/EiGjh3gkVAE+pCiHdMtynzUrXRiwbryhwpsLky+5LkSgltAhNydHLOr8Y2clCgESYu9RapMTlrBylIcXYkbP6esU509K1JStaQxsGIbk+vSGKt4ap1HOEKlkbSiEhTbkMwbpCVxPTmjOeYAtBPcyi+YuQFnQFrvoYmFttQsdblzFlZZyjmdsh1uAUhHuKffHhTKDN/MNR+uULGH1pmiYV2KiQfuggM/uPrBHCMRBzSy6ijVtWsyvwMSzYiN/EXGw2Jep6xcqcnTMhyD5EBfiHcciByjxKmKUrmOVyR57x4xYuqUA5cEKKRdgxHxLeMWqVSQMqAUhVr+0ry1A35WidWv1D2M0tdT2MiVLUQMiUo6WFz66mOpMQK3dCk9SGCubdR5QrYjKrK1OWTKaWzBZIALBicx1v9kGCFPgOI9kmWuqlAjQ99VtA7gOWb08X2qxMnDNHWjtykEOEAsepPyESYpjEuVqe8dgR6XjPsS4Yr0zO1mkzmsFSSxA/hsW8Hg3gHDEudMRNmyzMMu/7x1DNsGOratz1htgVDKlXiqROBc5ZimKbdw3ZT9bBvOH6gQezD8ojxDCJE8ATpSFsQQ6WZuou3R2ixMmWYAxwnGBMe/0ppNgEkjpYsYzDigJCETQWKFF/AuCLdW9IdfpGxMSKJeX2phTLHme8fTeFDD5gnqkt3gc0wjqClgeoVfyiWQEEN4mjBtSJ7wbFQR2arHZ9j+v1aAGPy+znk6Z7+Ct/VwfWLnGVOZJ7dBIBLTAPGyx7n8o8IwmbWS5ZURKYvmUxKwzBkg6Md47GFX3k0DKOb9o7ynIqWYnQ68w34j4Qw02FTJstRKQUZX7wIzh/qjctd3FoEUuGBFQhClZ0OSo5SA6dOl9OoBjUKLIUhw/nq/94nnyVXGMv3M1RivYpmSVqcAOhXMNoRzGnlF+l4Wlrk50lSVMHSnTRiQC/JzfnppFH6Q8GKqgJllKQQpntmuCxO3J9Hd2inh3Es+WgS0BRmpdKnSe4xYjlm2u7X8tPBigdf5kGajR/iQqwmf2s2UlBVYOqwF7pTmJv4A+UUcSwybK/wBSUpIP1gxHqCR/eHrB11K0omzJeVyW6hIy57cyCPLlHVNMuYF9iXBd0KN0ndIG45EeDRfG4Zt6i8PbczWW6SL62f8ALwi+JBIBBF33bL08xFHHaIpU6U5W9pIsxBZ22vtENBVn2TubPz8ecUyYz3ERMgB4mEZNrM52B38eQgpRFLAKLg7Dbp4coDLnXLghXXeL1OsO75jvqznRzzjNkE0KYTo6o5lSlu4HdO99P1zjdvo+4gNVTMsgzZRyL+9buq8xr1Bj8+4qMq0KcudfMP8AG0aH9FlXkrkpB/1ZagoE8gFDzsfUwcLcWH3IZ1sH6mzx0dHR6MwzxNQFJKTcEEHwNjGWcR4MuVaRMlzQSRZQC0jkzsfFx4QVxrHZkwm5TL2T82gfJWNX9zx5vU5lfVTZixMNxDmUuITFlJkKAFgSoMBys+kWeHeFHnGZNVm7PRI0Ci43uWDm+7Q7zlgBzbxiE1aQzkOdPh5xl9Sv0ipYqTCs6pEuUlCWzr7ieujq5MBd4rmaQmxHeD90GxcWBPPWIMOKlKzkKSASkAkZgHubWuR6Ac7S4ikMkup1K1J0F/eRtAon3SZ1qeP2nMhKQWGpOpLnTk5PXbxihxLIlzpMyWUhYITp9oAMQeel/vR9q54Ype4JASD7P6Ful48VtQkSGSbpdRcFlZUqIfoLHyHSGWyZxqos4dTyJYGSXLLs7AKJ89T6xeNLIJzdmgL55A/hmAHpCPhEqb2WabNWNkhOT+ouH126QRoZ6vZmTVTQ7Ak5UaaePnHPjYE7v+4gZYTqqQuShSUnYhZI1YBjcP6RJwHSqraggn91KAMxQdySSEoBO6u852APSAOMIzKQmWoIClhKgAACVKABfXobta0aJwfPk0gmSQoAuF3s4y5S38JZ+WYQyKv+U4mzH8AAAaNYDk3Ico4QmcRcViWMwLpGp5cngfw5xgurqBIloVfVbFkhi5JZti3MxW4JoK5Tho8yKgSwJZDECw/OJmYM3rC1xl2uSX2JAmBdnDghjmDcvZ9BAudGNU0Nf0gdiNfLlJUta0pSkOok/jpGfqxmvM0ycqElh3nJ1FiATzcQUpuFBMUldfNM/KQpMpmlgjTMPreBtteO5DtDUReLeJ11Ymdmj92xSgk7P7Tcy294o8A1azNUFn/TDD+ZTn1YRuFVNkTMgmypcwIIyBYSQk6WGwaEXi+lpqfEEKkITL7eX+8SmwzAIKVAaB0qu3KC+TliKymLWQQdxckLkKDW73mwcfCB2FV/cCrFPLYae4aesXOIZoyKSB9VX/6t8/SFDA6zusp7DT19+ojMqcsf8zWW4vGyvxQqQEsAAoEDl0+A8oO0dWRIDWJID+fyhExCdZIGpLD3kt7x5Q20U0dnl2BPuZm8olkWgJ3LcqcXSlrTJKXK3V7PLMr5wu4lWzKRaFqST2iHPaJPfUCQTfplHk8FavH5cich1ZbqYm49oa663i5/icisKlzUomhLBKVeyT3iSkacx5eu/pyfTCMupmykFqBknB+NmcU9qRmyZejFxp90gjwMecaqplPMK8l0nvDTZsyeYO/lcR7GFy/ap0dmQH7OzHwD+0NxpEk6plz5RQsEgApSq7yr95PMhw3S3KOsIxVhoxgCV0dxc4or5RPbBRK5gAcHYhIJtyGp5lukKi5AALsTvs3Tw90WcckBM3InZOpOtz+rR4l0qim5CRs/z2/vGpfaNmQNsdzmJ1JNrE/DqOsWKUDmB4FtI8rpinKc3MsNR0O3pBDICdA4Dgg/3vEsjipZEkOJkZBlBAcAE621h4+iinKsRkkB8iFqUeQyFPxUkecI+KTXUhB2uenj7zG4/Q/wyqnkKqJqSmZPbKk6pQLp8ConM3LK97QMKE1JZnAuaFHR0dG+YpldXJC0+yNbv+RiEEAsCWA6/F4q8QJnUkxUuY+V+4rLZadm2J0driBE2vLEKsOXzYvHgtjYGjPTRwRDU6clIJsk7k3b84VsRrHmagkeQA5l/UmPtbiKQO7qdvy5dYD1iJ9af2emQ50mqdkpH2VK/AXh0x8juF2oWIc4cxqZPUshYIBAZRII5KB5H4w1zZgBCe1zHUkl2bkCXA+PrAXhjgMyUIEyf3g9padQWOUlWrF2LCGtGEyEC7v9okP42DQH4q3tOpIWRuL85YJLsAHOUet77sPWAHFWPPKTKQ3aTPB8jup/4jZ99rC5vifhqeZSjRrCiCSZawylfwqDA/wkX57FC4dqCjtJkx+0USFlWrgkEEHRrW2ZoqgAXn3+pPIf8YXw2iE1MtJVlBBf1Ygbam3lHup4dSlQSlRUkglyboD3AOmm7c46kn+0GYHsynW4dbnxsHinjWMTULQZZDKCgxHUN1H5wgLFqEFCpLKwfs84StKmugrFwSHGzOzXi9OSmplIULFQzJO6SR3k+uYH+ERWw+lqFICyACsAnMps1uVyzv7ukSYZKXJSmTMYKBUU94d4Ek25m9xqN9RCO17vYnVF6YK2pmiizGYUqsgBIFrlSiBoAXv03aNw4OwJNFTypNitiqar7Syz6/VHsjoIXeGp9PTpqashAWsoC1KUAQO6kMDsVHnctyh0q6gCYgvZSSPPWNPq80Ff9MAWjcvoWIG10r94knZ2icTImGVQZQHV9R4EaGANwxEr6lH7csBWiUpOlixPkWI9YJGqcM/jf1gieCaQqMxRm5zqpKwCrqpgyiObP8I6Xw7KSWVMmTB94pD/ANKQ8TdCNxwwi5W4pLppZmzFFhYFnJJ0AG56RnGN4iqZVS56nGdyAfq/ZHoG9I17Ffo7pKhQWTOSsXB7VSgP5VkhvBoz36RODaiVlLZpZICZiHZJ2zDVJ5ag2u5aGQAED+4y138wWvEROWEsxUw9Tlj1WcNzVTUdkwe00nRLMM/qwbckdYqSsFm08yWqd3kKIyrAYPayhsYeqKYAkr2JYeH6eJu4xkcNiaVUuPdqKvEOCS5UsZcy5iElSVEnUX0dmJ2beCyeHa5FP2qVylkA50AqdI3Ykd4+nnAziWeUy5izqUny+6PcPKHrhyoTOoizEEEW6i3nE3Zii/vJvptRd4awdCFpWtSJk1TWLFRHNIdkoDD+8EsewLOoTkBAWHASzdpluEnQa2CjuYVOGiKevqJalALmhJlk7MSSH59Ic8YmzDJlrQkkpV3k763YehjaiccoF9/P/wAiqwOvuK2C4yntEkpPSza6/mG26R74mplrqJP7OcqpmYTSxygJAZSuRFw+/lC7iomIqyaXNnmKKzKIfKT7Rb6oJJPnD3g0ipMsrmhGZrJRmD6PqTfloPDWG6k1TeIE3YMUcZ4Hqe0SpBlrlqtnBJy3cOls25Fn2ial4aXLXlmKGUAPq5O4AOzav5dGemxKUT3zkGrqOUgv5adYW5tWvMQXCc7g+0A5O/PpEWfIy0alPTVTCkpSJSAlCZaQPrZQSeRL3vYRHMnoWkWCgS/s9bjoIW6mcXZQfayiCfFrNH2WtUsTAVlyA3e006XsQ3hAGHVmEvXaMOE0KJU1E9MmXMKb5ZiSUnkWcXGx21jY+F+LZNX3G7OcB3paj6lJ+sPf0jD8LxhZUElmt1e2t9Ad4NVcuYgpnSzlmIOYKffoPCGTO2JqJ1J5MIyC6ozeI6FbBONqebIQuatMuYQc6X0IJSfJw46GOj0g6kXc88ow8Tzx1iJTLMlKQcyXUSHYaAAcze/SMsnYOrK9w7nUxofFySJ6n0UEkeDN8QfWF6coFNhmI1bfzjzeoynmQZoxrqZ5XYaxbtCW5fNnjQeG6BMiQhCBZgS31ibknmXheraJgbhzYgXbxg9wpiOaQn7Q7p8ok5LJNCd4dNQWISGO5fTppeK82Yoi7Dmb3/KOmVJO5JHUD8/KBVbUh3Up9yk297M0QHxHhVM7K17HmQ3zhQ49wkJqJdSkDLNDLb7YHtHqpLD+WDMupCgCA9nABc+7TzijxlOCqJTe1LWksBf2sp+OsVTRk8gtYlKryqYUqs6QA7MCCT7wU+kGcMw5JKZ0xlW7iTcfxF9dLDq/KIsDpU37RAKpmoU7p71lW+8AL7EPBaixVCyZctN0MGUkZrBvYfQEbQcmtrM6n5l1M0KNlAK5i7etuevuhcxqSifNKio5UBkBB3UQ6vMsB4bwWn1PagoyAAixQ4HUHWxGwtA1EnshYOSXaxzKDsOTA38omhowkwPgeMy5a5siquhRF1nMApCrO72sCNo1GhrTOkpuyklhrYgumxuxG8BeBuF5MyeqompC1JYIBuElnKjtmbKkHxOrQwcTSUyVdqLJ0X03Cz4b9I1OVItZy35ktBi5IdQ9ksoj6h5KG3juGMEkzwbvY7wnmmmTp8tdNM7OYqyybpKRclSfrDl42Id4bpuFJyES1rCwLGzE7AjYHp74S/iNUlNdl3gLiGP5HWUlSRqQDYbk8h1hfl4nOmq7NMs5gWJUpgk6EMNS9oVfpEwKfJKZ0xalJmDKCLBBDky2G2pHO7wVtzR1OqbvQTgUhSbgj8BE1VKStCkrGZKgQoHcQm/RRiUyooUqmAulRlufr5GGYeOh6gw5KVYwCOOjBcx/jmb2Mupp1u8tig82ZSD/AEsP5TFROIDIiUD3kpA8dvi/kY9fTYD2wIBJmIAYDXKo/wDKFbC5c1a0SMpTNWzkuQkOxUb+yBcj5xwwAJf/AHxNS5rIh6owwVSxKUTlNzsWBt4Zi56AQZp8uHkdm4kEd9yVMz96+jAmPkmnTKmWvYJdmzZSQ/8AMWixxFOH7NMH2wU+T/jGQOeQTxLsgKk1uCeJcFVUTpNRImBKQ4WpIKixAZkp6fGCVdVqkSSQskhPeUUlIsCSQk6Fho8LnBuMrUlKe0BKe6UkAFNyEkHlvvqYOcd4gooEgIUVqIcBJLOWHgCz/wB49Ff1BWHbzMalSC0EYKtKphWsspTZj0aw02DX0vtBzHMZqZZTKkhIQz5tT/eBXD/CNSohSymWOV1EfAehhgruElqSyJ4C2tmQWfn7b/3iPUZFZ68R6PGpmWLkftKkgkucy3Ll1MT73PmIO0iHQoLJQWc2BzeIcuHhqRhkmQjJUS5YJYdoU5gs9S1j84FcRYJ2WVUoEBYYpBDOdGUfOxNrQzMGoTsakbMWsTRlOX2ku7tflry0t4QOXXC6dWFiwvcNduUT1AzKIQCcrDvHvG7WAGsBcQnMco0zE/BuvvjbjXUhlajCVJPUQDd9267Q94NN7RIDjSxVoD0hAwwW1IZr6w5YQgBSVey+vI9RGTq11qaMDSCrkqC1B067PHRaqpiM6tddtI+RnDmu0oQJtfGeFmbJ7RDZ5YJb7SdVJ8dx1HWEfBKLOkTCXSrRIe/UnYdBDjxJj5QoyZev1j/4jy1gIioDER3X5U50nfzMeFSF3K1RORZORBSTYMGsfCFzFMJMj95TlXZlytGuXfMkm+TVxqPDQ5OUXa2p928eF1AvzNvwjDidkMv9iApeJuGKnHilvQAx4mrzkMylm4BUWT1OnpC5i3bUU/skpzS1JCkF7gX7viPlH1GMTzZMjzK7ebJ90eh6R7jtByvtGNEpewu+qR3X5cwH6NA3iKv9mnBuWXMGu9nPU7DleFXHsWqkp9kSw/tAkk8uQbyiXBKRaT2qlZswBLuTsQb6+HyipxUvImSbJftEZMPczZczQAkEgbFL/Fojr0S0rStNkpBOYaksGL8vZPpHVMuyQktzPKynYW5x7oaMAAzGWPq21ZwVEaMAAH3MQDACzEKkytQrrJylOJCvvd5K1JJZxk1BHTYxaTRVVv3QI6TElwNLFKV/KIMZrEykhanDEAlAch3ItodrxZpqpSgFCaJqTodx5C4I5GJliRy46jcRdQzwxjX7KVCaFF7+yxT7OofSx/Tw14lOTUSVFDLSpJGut3IvffSEKetMx0qfM+u45F9xzG/SC/Bhm52ObL7JDPmOgA5Nq8MmUnUbjqUvojop0qZUom5v3WVKAeRKiSk/ZLJbk0aQnWxc8ydOkCxTqk1HeZlhxyt9V4NSwNPMdYs7cmuIBQqAE0CZVSo65jmfqwzW8b+cT8f4UKjD6hDOrIVo/jQMw9WbzMFp9ClRCnII0i0mSCMqrjQjnZj7o5SQbnGLX0eShLw6lQLPKSvzWO0J9VGDs+pAsTp+r9IXeIljD0JXKQf2dLJKUuexD2Vcv2bkBti2xsuzeLUTiJUiYFKVctdMtO5UdHOyQ7nWzwH5Ek+IVF0BLeOJROqM5uJKGJbdSisj0KBbe20DMClgqmzyBd0p8AWYeea+4aPuOzxKlhAOxUSfB8x5nU/mYlokCWhCB9RIfyA/E+6MbuSP3/2noogUV8Qfi07JMSndIc+Jc/FopYtVdoZFOlQBUUhzoNyW6JB+EUMZrCuc93USbasLCw8jH2TwnNnrE2bM7JIPdCbrfx0SdOcWxqqkM5qK5YjiohWu4SpEJAkqWGHeWXdR3dQ+AYCK09EukkpmSiQEzEqWAXJHUlxq2sHf2NUuWESaiZnA9pSUqHMvYP5EQM4OqTUrmKqSheRTS0BACbE98p52/RZresGUt4H9yDIVIAEgxLi+YtQ7OZkRsQUjNZ9ToIpf5wmi/bZj95NvDun3tB7i/CqZZ7NEtCZi05jMAAKS7JdrNYv5RmtJh82oVklAqLgONNb38I19O+J0/TX7wNkZfEa0cTz6hKpbP3SOzQQy3Hw3ivRYnMnpEk5spLkHV0nS9gevSD+DcPSaRjNUVTFd2xtfbT8I88ZVMiV2JSkZ82Us10ZWILcucSYqbCCMLFExfr8JUSVdmwCHcb2fvFrlvfAidRukAgEO9g32dOl40fCKlExIBKbaP4EPfXQxTn4YhbBBBUks+hsCGfnvEMfVkaI7R2xK3mJlJJSmykm6XSR0LHy6wyYRKYaWuzmxi1VYcAlLXUO6ouLWtflZm6wLmVeRJl3DahtDv5QxyHKKEXiEkM2WCSbi/KOi7Q8KVc9CZsuWShT5S2oBIe/hH2KjCfmR9UR1q63NNWrmom/Uxwqm0ijUjLMUnd994iUR57RjZQTZjAanTK7vHd7fOPv7SwKlA9AOQisqnBV3kv4fjHsJCHPLm5boIBQVOkOMSQqZK3cKF+dviX90e5chmFgHZmv6QXoMF/aFZ1TCmXLGVk6klnBcfw+uzRZm4YgD93Omg7kKTf1QbdBDrfECMrgRU4jo0LQqUWZtbWd2PPZ/WFgTVKkZ0A5Am6rebbkAlrQzcQcHz2VNlzVTd1IVZR6JIsS1mLaQt0lQFpyJsLWSAMoBZgDbM/v13i3Gl+ZLIwJn3DQUhMsrUSopSVKUTqRudEh9BrDdVpSnKkBgOl0jxOhOnOBcmhkhN5ac+wAKi+guvU9QzXtHuQoJdJUSqx7xcjkBdud9rRDML3EUz6aNUxRUqZkSGyoSlzycknXpf3mKlfRs5lAqDsWF9NmDkFjpE8/FUS7WKzoxJN9bDXyiP/qisLUWT9VBUAfHKLD18toKsQK7CcZDgOC1lRNH7ybKln6pAKmG/fcJJjVOEeHv2QkGYqY4sVhOYDxSA7uPSEjhfidCanIuYEKAy5SyS5IYXHTpqIf5WI5ppvdgpPUMAofCLA2Niv4iwriVIJiWdiLpV9k7eXOANNW5syFDKtBGdG6Dsoc0K1B3HVwGQTHgVi2ASp5CyVImpcJnSyAsD7NwQpG+VQI3aAV3DIE4iRo56i/uMff8TbXfpf0gTXU1TJQ5CJ5G6U5VHl3S4duREK1Z9I0uUwXImpJ0HZi/X2mPkY5VY6E46jni2IITJnTJjdmmUsqSblQylx1BFvEiMg4Fq5aEqWphueu35xcxrGZtagg9yWQ4S+vIqItY3CRYG9yAYWcJw2Z2vZ5mR9Zt92EU4qcbKTKIGVgahnHMf7SclBPtzEZueXOk/gPSD9TioCFF7kt5ak/H1j1W4ZLVIVLEoZcoIIYFKrZVvzcl+cL3BlEupIVN/wBNNgPtEHf7o95jMVxtjsa4zWCyvR8wxgdPmV2qw2ayXH1dSR4v0Daw1pIAIAJA1IAb5frSB/EaCjsggsWc6fDysIjr8VCZXMJAcu3kBz+EZWtyDKill6qTMEsqlpWsq7qezSVAA2JJaMtCqqROXMEqdLBUT3pawCCokO45RqmC/SFLJPay2lk/u1oAZCWbKd3BclzqTBCv4jE5Tyy8lragltSRpr7hG7plyISCtj7mPKxdhupm9FhmI1xVPk5SkjK61BINizDVtTyvBmhkKw+Qe0p19wAKUgBSdLqKkuwe77QeWciVqkEAqYkJs5GltApuWvwSKisW57OatiC4JNxuC+xG0XA9awdV4E4+3d7hKXi4mKCrqWQcqdAnn+atY81MuWqbLEyQFkG65gIGaxyPozaJ057x3COGhAWod0kHKTokOyW+8db9BHjiMpFJPY3JC0qzPlKSQkA7qcF25keKAANxH7RA/wAw5iktCmUiSkJG6CEqTb7IDKGvuhY/zT2S1oUoJUlRBtvz15R8wHGpi5SXLFvaU7OLAdX2inieBpmzM2ZlEnNlGp1GpLNCqgDkZJRizAFBPdXxQ75GL6sDv42frBDg7ATWTQVqEuSkgqJUHV0D3Kj6DXkIEyMHSgWU5OmYDrsPXQ6RXqUKRdYSQNCm6dzc7HpF8aoD7ZNw9e6fo2RKCUpSkMlIASBoAAwHpH2PzxIqVhIZSgPFX4GPkafWHxI/jn5mnYnSqzKWe8CXLajwAgAmvlqfKu9w28NS573hC4uw05jOlWVuLMr8/jHj4yGNGaDoQsa7Ldx+useKRSpiwgXUouH0SBdz0fbeM9Rjc5gAb/waeZOvlGh/RvSLMpdRMUc61tmI0SnugAaMSTpGjJhKLbSQyAmhH2josiEouQnbYk6qIGpJvEc6UpJs1t+UTjEdmVaxISw98Rzpycii2VIFybfh74mCO4hBqBZuLh2F2cW9HPhCxxaRJAqUSwCpTTQkbkEJXbe+XxPWGikpQE52DE9y3tX9W6wL4jlvTzUKIbKQObhaS58w8VUi4GFiKNBP7SUpSRkOjne4ChzD6P15R1JT9vcOEjulR2tcJHPQ+fWIVqTJBAKu+Qbmzhn2sWbxaJqPGiUmUZRzofLsCCXCjubvbQwrA7KyakeZMrDUS0vKQ67nOq58elg7+WsVpWKTNFpJcliDyZ+6dvPnE89cxYUuetSEAPlcJSWFnvm5R7p6QJmMH0PwN/J9YUgEe7cbnXaQSMAOIqeUCSgMVABmOgUTo22pvGlYDwlUSZSE9ulapf3VDyJdyG6RLwnSIoKSVKdioZ1H7SlC/poOgEMUirYgggp38DeKg0At6grzI51X2TCYQHs+3rFlKirQhuesQ43R9pKWiWWUpJKDqEr1QWOoexHImEnB8ZrJaVCfTLRk9rKyk7XSQXa+jGAykGEG49zFg2LesJX0jYbTrpJjpGdAzIIsygbetx5xblcYU67CahJGoWpKSPJTH3QG40w6rqpGallGZLcKmEFlEC4CElioPctroHjlvkKnfvM6qKWclLJSCGe+o8ouYXSTJKCtXeLuopc5enw0i4awCUkHZQFwxBB7yCDcEXHlDRSMEsGIdvkfMMPOJ5M1LxImxcfu5XFWsxJQl2Plzb2R6kDzhm4apAiXLQLMkEn3+vzMLOJ4f2dRJULSSq/3VC7eeo8IbKdbS3tdgPwPpGfLQUAeZZTsn4gTjbEGVmJd1BIZ9nO14AVdPVTUJSJaky3YqtYG7hLu3vglU1SZtUEPZA+JYl9j16w0SUsAPfzbn1h+YxAa3F4F7FxTm0X7NKBkgKSzkG4PN/nA6Ri4fNLdF+8kjQ8gRYjw9IYeJZ4kPY5Zge2iTu9rbepgtKm0UunEtYQlGQZrBid+r9Y04szKtkXcxlSDxi9huMnvZg4uQCbe/rFui4dXWU8+okAJPaESAqwUArvKKmtfQdPRRxXFqZBIpkG9sy7EX2TtbeDsjiCYikCUTSlYcBKbMD7JbQgJzdXi/Bv1AUTOB5avtDI/cyglx2pOUgEWOhB5ZQP04haxeYhTU6C6Ul1nZ9gOfjFKoxOeoghu+chX1bQ9SPXyienRlGXUuCrcnU/rxhBjKG27wqAxoS4lbJSkAAA3bmzAeFifKPpqbtcJFi++7t5xWqiAkOdA9h0tfn5bwLkTjMXkQSpTEl32D/rxEN6erleYWG5TqUb2H6aLeXugHKQLFPlza8CKOaSnV+n5wXRNDBKQcz3J0bkOsSY+6pTxcpKwtR9kFttI6CKSqOhubROCxwK7M0VKhLg2iyJgJ5eMUaysDK5NePPW4sUcVwkS53dDg94eZLiHnBpqBJlj2kBAZN9edrwOwPAJs/8AezTklq0H1iOg0A6mGOlwqRIJKAb81E+g0jRncFaJklG5ITMSMyAVLysGAyo3ZrP74imd8A1RKRrkzpA8wS584lnzZQ9pkwArJ8lytIsnVZJIHgC4eJIfiMUMPrr5SiVguEjQaADQP+AhKxmtXMdIYZlFnGgF1adWFt1dIp43xcwYlxsB8mHyhepa9almYpxZgkXyjkPnuT4RsTEa5GQZ61DuFswmFPe+qDfLs45E6PyiWskpWpKtVhQbvM7XIJBAyka35NeOwyoSQnM6V5T7SSLgtZ/V+Rj7UykXUUudFJYMH+sEkMxjOSeW5wqoG4qlCoWgStQk5n0AswtqR3jYaRN/ieaStKZoTMAOYEe0W1BOxZmA584JoriGZOYGzXDCwbRm98ec2Y5SLDUKSD8bkRUNaha7RKmr0kyRW0SVoLoWh0kWILacwoH4Qn8Nz1yalVOtZUlbgOXuA4Ifml3/AIYW6edVU37ujdaZj/8ATpKiQrUqQwJymz8iRcPDnhnCE1EtE6eCZqWUS4ZJOrDo5HPrDEXsdo4bwY5U0/uBzcfOB1RWJICUhywB2Y+LMY8Tapk9SfxeKNJh8ztgZhTkAJASVEkks5DWt1hSx7QgSiv6PEzZ/wC0rmDMwyywlw7kl1O7klrDaHKnWZLJLGw00HSLNIwAby/vA3FJwzt0hiNQeYP4z4Mk4hLUuW0uo2W1lNoFgaj72o6i0Zph82ZLz089JROlFlJ96VDmkjccxGoYNjIOh6ehYv5xR484dFSkVMlP7+WNBrMRqUdSD3k9XH1jCsodaPeVxuUb6iZVgTkqRoVBx0ULhv1tC/TYwsy0ygHmk5QH33PQCCUqqBa+mnX5RDw/RoTUTJiUusq9HFwPNz59IzjiFPLxNm7FQpQcOJlIWwCppSSZhdyopIABew+74C8QYDiqVIDq+Fjt5HY6Ra4ixHJJUnMzXyjnz673jL0iZJyuTlOwOsNgxHMpLHcTJl9I6GpryZsmcFAkZQO8Xt7V3PlCVW8N/tFUr9mKewlkFSiTlDuyUgO/Pw8Y+0WLdshNJKSE9qB2i/sIBc/zEhvOH1BlS5aZUspCAwZIfXw+MHGjYLLHfx/z+8if9XcE4hSSv2VkSpSUDOkhIAzd0OWa93hH4ZwuZVLyBwlPdUefh8fPeGniLFky5YlSx3nZCXclStVHwBhjwiml0UiXLYBTMptVHXX8YfHlbHjJ8ntO4AGfJXBNMEBDr7uqgoi7MdbacwYQa5KUVC0JVmEtZSFp+s2hPXm3WHTiziYS5JQhYKjawNtL+8NzJEZ1Ry1AZyNSHtvuPG8Uwq5BZzCDvUnxJBKAAzqLD4+kLxlBC2JKlad0WB/HyMOFCUKUCtGZKSC3P4RQxechRyS0kIzlZKgHFmCAR9QXLbExoXJvjJ5cZJuVMPWoJyjUj3wSlL7qSoPfTT8YpBDHS7xKyjdh5QpFmW2FqERVnkn0jo+S5RIBZPoY6J6j0fmOGK4RPSfbCk8xY/lFDh6hWuoyrT3EjMdLtsT1MOM+bdteY5iBeG0kyTMUvMFyyNdFC9gRoR1HpFcvT1tRPOTL4MKViFkWIHhtAuYFomBipQNyTtbSDBnhVrX16RCZCUBRKnFzrpHkMCCRNasJSWbeym+o5wAxUylgpKU9WcN+vCL9TXIN9OX9oXK2sBsAG/Xvi+FDAziLGO4ekzk5DZQbTQDf3wSpJYRyAA89NzzivXImTFAygO679X8fKLtFICpZCkfvdC7v0Z9A3wjXlbQBMy0CxqdXInJAmCWssQWAu1rkai0WkVWbUAFSWtv4dRy2ipOM5KQWUo7MCVC26ddNw8VMKUqbNOZRQnK7M7lwBZi2pJPSI8bWHzL0lNPKK0qWUWNudrANvrrEXClJU1FQmXMndnKAK1zCEqUlIIDJt7dwBtvs0WKqgyzQEJE12d2DdSo26eXSPOJU80BK5SgFC3dJFtwCAyhZobG6+d38zipm30CqSlS0pIBYAqJdSm0zKNzv0vHVGPIWhSQBcERicriioyplEpKhZynveJvl9ByjQMGwTtZYUqdNZVxlUzj0ixsCx2gFEyaWFFeZRcA2AgjSVGaYom2g9z/jFmhwOSLnOr+KYo+54GTaZFPPWlKyRN7yQovlKQMwB1IIKTfkYiAblIxypgD30G8Aq2qGY+Z8eUS9swUSfqj4n9awAxKpCUKUWs3k5A/GKHtFEHcBUlRLqVmoH7tJJSftqUS4bkAPeI0DEJwlICxZD5SAfRQgFhQCkDXz1/Voo/SJNy0wl5iyyHvr3g+nQG0Ld2ajAWQJmHEOJKRVzZqB+5WqxDM5SMzdM2bzeDXDBK1KNiVEBIfVgLnoLxFjNKhVGphdyUga2v8A2ivwTXqRnTMSxbugsMzXLH7Qvbe/KEf/AFcdgbmhbxvxuN0zhqVMdU5ZUAHIDpHuLnfeBGIYZh88CW81N3SpHPq+axvs8R4njk5aygHKDZ7XF7n5QHUooZZWgJzOMym0+7q0asHShVBJ3C7Agz5X4KaDOtE3OCQCSGUkbdCC+ttrQyYRLnTpYElORKtJiku/MpSG7vUnzithKf2+YJanMlJBmKWGCwl1JSE65XYnmw5wYxfiMyu4hPiSWDcg13jNlByPxGyPP+38wKwUa7QXiHB6JS0zl1U1c3MLqQMiib5bXSDzialrhNmBU5SUBADhSgwb2nfd39IEVONzKheQEs9wLDoNzEGAcITFz5i1lKkpUXJYkKNzbnfWKOlC8h2Inf8AQJW4txATZqMjdkSyNszCyueUl77t0j1LHdKWbQgdbB4O4pwJKVcrmBWxB38DaAYC5KjLmEKs6VANmAdNuRvcQeaFRxPaFFYG2n2nsFM9/wC5iCfJN2YkMX8tIvUCCVlhcA2/WkWUyBmZX2S42v8Ar3QjZeLTSACIFkyu8B0NlA908jFuShhdIYC94nnye9nBf8YEYlWBsqS43PPyhk95iOQouTLx5iwFhpeOgPKpFKGYS1EHcJMdF/ST7mX1mm0TJgUHBB5ERX/b8tjofSFnD8clJGSbJmS5gtY28wpiPfBnDpYnEdxSgeojfwM8s5gO8nOKBNnBHvgbiGLuNHt5DkIasR4dlS5ZUJawQl9SQ+13gPg+HInLIUJqUtqkg7b2jM3RKxuOvWgd4o1VRMULJUW5CB02VOVbKUDe+vnGip4akKKu/MABYd1N+ukWqbg1Kg6Zs1n+yj5iG/GAGp35QJme0mHEAOuWPGYmLqKNaVgoVJVzeYlm+IPItDtN4QA9mcrrml/JUVJnCKjpOR/Qr5mE/DX7jfkfcCTEFgSA42SoEev5RQqqdJckB2tqTfqNdteUN/8AktYS4VLU3MK+UVKjh2Ylw0vy/wD5iL9BZ9pjjqgO8X5EtITlQlr3JNzzJ3f+waJJ8hRuQT5F7bAC/wCAgp/gKh9RHqPlHLwhf2APBYhF/wDHsGsk/wBSh61K8Rf/AMImrCj2akhrONYZuEKpSEmUvMki6XBDg6jyPxit/hc5mCdfvj5xPTYKrVaSTyzO3+6Ng6esfHch+Qpa7EaJ2JBCdS/KErEMSWamWsZiiWS9jfNZR9II1GFzClgF+R0/3aQIVhFQ/sq8XP8AyhU6etmM2ceDGM1hKm+rkLeqT8IX+JKkqR2aBdRDnkAXF+btFmXhEwMMq7P9Y6/1RXrMAqVXQhZ6P/7wVwUdzjmFd4f4cxB5QUr2gGUORA1/OFjj/ETMXIlsdSVdDsCedz4QRo+H6hKboXmPX3e3FCo4ZqistKUpJvdQ/FcL+P3qEdQorcF4oWldjLOdaVEqa4DhI9rQ/WtHgSpS5Y7Rsz6XsGe55vaC3+TK36sgt0UAD19qLA4Erj/9v70/OJHo6UAHcuOt3ZilVYXKZpa1KV90qZOlz48uhgTTUWR+0BKo0QfRxiB0kJHitEfJn0b14Dqlyx/On8AYsMFLVmSPUe66lLhzGhIlqKwQrZKeQsn3M8JNbiRXMWSl1KUSwFhewHhGkU/0a1l3EofzH8Ex7T9GFTfvyUvyzfIR2LplxsWXzFbqQRuJOB1hkqSq3d2B1cMeegNov4NiipU+YpKiEqYgka2YuOcOEv6Mpjd6ol+ST/yixL+iyUfaqj4BA+Zgv0yvd+YB1lCop1WKTJyitU9EuWLJluXOzlr357RSxqrlTUoSLKToQbhwxuWcaRoH/wBMKcC86afBI/4xQxXgGnQh0maW5ltn5DrCr0gBH1Aes1qZzImzUKzA5uv4tHyZikx+o6QzzMFkJDhJJGrr/KC2D4RKWsJEmWSRbOtV+ekO3RqTcI/8gQJnip81eiSPdBPCsICmdBmHf7IhurMORKmkESUsfZSFHyvBBeJ9gGTLlrz+yyC46BIiidOqdpF+sLncp07JSElYDbAgN5R0WRIxlfely1hB9kZJKbfwquPOOh+MX1D8H+pq+JYBTT7zpEtZ5lIf1F4E/wCTpEsvJTk8Cfxjo6FsiWKqe4kWJYGuakoUqx5H84E0PBxknMhRPQmOjoPIxfRT4hCRgEwOyhfntEU7heZrnSY6OghyIpwY/iepeGTki0xQtsR+IjwrDagn/Uv1y/KOjoPMzvQSel4JVke0CP4gIhVw7Us2UHzT846OjvUMU9Mn3I1cPVP/AGx/Uj5x4PD1T/2x/Uj5x0dB9Vop6VPueRgNQNZX+5HziGopVI9pLeY/Ax0dDDITEbp1HzIgCRb4mKqxM6t/EfnHR0NyMmcQE9dou2v9R+cWpK1bj/cfnHR0dcUoJZlrL2HvPziZUuZrlP8AX/7R0dAJqEYwZKiVPZgFt/8AIf8AlE37PU8l/wD5P/eOjoXkZUYh8mWpEuqAvn/rB/8AKJhMqUXJV55T/wCUdHQvKOuIfJnDFJm5PklMeDWKOyv9sfY6Bcp6IPcmSSlq+yfUROlK/s++Ojo4sZ3oJPkybO0CE/1QLxDDJ05JSoIAPV46OgcjD6KfEDp4ADF1G/h8ov0HBYlqzJUQWZ3jo6ByMPpJ8QijgyQo5pic51uT8NIL0uCypfsoSPACOjo6zGCqOwl8SxHR0dAjT//Z'}}/>
                                 <Text onPress={this.handleSubmit4}>Dry-Fruits</Text>
                                 </Body>
                                 </Card>
                                </ScrollView>
                                <Container>
                                <View>
                                 {this.state.isClicked1 && 
                                   <View>
                                    <List>
                                  <ListItem avatar>
                                  
                                  <Body>
                                  <Text>Ponni-Rice</Text>
                                  <Text note>1-kg</Text>
                              
                                 </Body>
                                  </ListItem>
                                 </List>
                                 </View> }
                                 
                    </View>
                    <View>
                                 {this.state.isClicked2 && 
                                   <View>
                                    <List>
                                  <ListItem avatar>
                                  
                                  <Body>
                                  <Text>Sun Flower Oil</Text>
                                  <Text note>1-Ltr</Text>
                              
                                 </Body>
                                  </ListItem>
                                 </List>
                                 </View> }
                                 
                                 
                    </View>
                    <View>
                                 {this.state.isClicked3 && 
                                   <View>
                                    <List>
                                  <ListItem avatar>
                                  
                                  <Body>
                                  <Text>TATA-Dhal</Text>
                                  <Text note>1-Kg</Text>
                              
                                 </Body>
                                  </ListItem>
                                 </List>
                                 </View> }
                                 
                                 
                    </View>
                    <View>
                                 {this.state.isClicked4 && 
                                   <View>
                                    <List>
                                  <ListItem avatar>
                                  
                                  <Body>
                                  <Text>Multi-fruits</Text>
                                  <Text note>500-Gms</Text>
                              
                                 </Body>
                                  </ListItem>
                                 </List>
                                 </View> }
                                 
                                 
                    </View>
                    </Container>
                            </View>
                    </ScrollView>
                    
            </SafeAreaView>
        );
    }
}
export default Hometemp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});