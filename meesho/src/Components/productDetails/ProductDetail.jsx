import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material'
import { CartIcon } from '../../Icon/CartIcon'
import { Loading } from '../../Components/Loading'
import { CartContext } from '../../Contexts/CartProvider'

import { AuthContext } from '../../Contexts/AuthProvider'
import {
  LocalOfferOutlined,
  AssignmentReturnOutlined,
  AttachMoneyOutlined,
} from '@material-ui/icons'

export const ProductDetail = ({ refItem, fetchURL }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data, setData] = useState({})
  const [img, setImg] = useState([])
  const [selected, setSelected] = useState(null)
  let { id } = useParams()

  let authToken = JSON.parse(localStorage.getItem('userToken'))
  let isLoggedIn = false
  if (authToken) {
    isLoggedIn = true
  }
  console.log(isLoggedIn);
  useEffect(() => {
    setIsDataLoading(true)
    fetch(`${fetchURL}/${id}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d)
        setImg(d.images)
        setSelected(d.images[0])
        setIsDataLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsDataLoading(false)
      })
  }, [])


  const changeSelectedImg = (imgUrl) => {
    setSelected(imgUrl)
  }

  let ratingBgColor = 'green'

  if (data.rating < 2) {
    ratingBgColor = 'red'
  } else if (data.rating > 2 && data.rating < 3.5) {
    ratingBgColor = 'orange'
  }

  let productDetails = data.details
  let productDetailsArray = []

  for (let i in productDetails) {
    productDetailsArray.push([i, productDetails[i]])
  }

  const { getCount } = useContext(CartContext)
  const handleCart = () => {
    setIsLoading(true)
    try {
      fetch(`https://meesho-db.herokuapp.com/cart`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          quantity: 1,
        }),
      })
        .then((r) => {
          console.log(r)
          r.json()
        })
        .then((d) => {
          console.log(d)
          setIsLoading(false)
          getCount()

          if (isLoggedIn) {
            navigate('/checkout/cart')
          } else {
            navigate('/auth/signup')
          }
        })
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }


  console.log(selected)
  if (isLoading) return <Loading />
  // if (isDataLoading) return <Skeleton animation="wave" variant="rectangular" width={210} height={118}  />;
  return (
    <>
      <Grid container columns={12} width={'80%'} marginLeft="10%" my={5}>
        <Grid
          md={1}
          Item
          style={{
            display: 'flex',
            flexDirection: 'column',
            order: { xs: 2, sm: 2, md: 2, lg: 1 },
          }}
        >
          {!isDataLoading ? (
            img &&
            img.map((imgUrl) => (
              <img
                src={imgUrl}
                width="45px"
                onClick={(e) => changeSelectedImg(e.currentTarget.src)}
              />
            ))
          ) : (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={45}
              height={118}
            />
          )}
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            order: { xs: 1, sm: 1, md: 1, lg: 2 },
          }}
          md={4}
        >
          <Grid
            item
            my={2}
            borderBottom="1px solid rgba(0, 0, 0, 0.2) "
            sx={{
              maxWidth: '400px',
              border: '1px solid rgb(240, 240, 240)',
              borderRadius: '8px',
              boxShadow: 'none',
              boxSizing: 'border-box',
            }}
          >
            {!isDataLoading ? (
              <img
                src={selected}
                style={{
                  objectFit: 'contain',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
              />
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={358}
                height={600}
              />
            )}
          </Grid>
          <Grid item py={2} borderBottom="1px solid rgba(0, 0, 0, 0.2)">
            <Button
              variant="contained"
              sx={{
                width: '100%',
                textTransform: 'capitalize',
                fontSize: '20px',
                ':hover': { backgroundColor: 'rgb(244, 51, 151)' },
              }}
              disableRipple
              disableElevation
              onClick={() => handleCart()}
            >
              <CartIcon />
              Add to Cart
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          md={6}
          sx={{ marginLeft: '5%', order: { xs: 3, sm: 3, md: 3, lg: 3 } }}
        >
          <Card
            sx={{
              marginBottom: '4%',
              border: '1px solid rgb(240, 240, 240)',
              borderRadius: '8px',
              boxShadow: 'none',
            }}
          >
            {!isDataLoading ? (
              <CardContent sx={{ fontSize: '25px' }}>
                <Typography
                  component="div"
                  color="gray"
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '20px',
                    marginBottom: '1%',
                  }}
                >
                  {data.title}
                </Typography>
                <Grid
                  sx={{
                    display: 'flex',
                    alignContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    variant="h4"
                    component="div"
                    align="left"
                    color="black"
                    sx={{ marginRight: '15px', fontFamily: 'Mier-Bold' }}
                  >
                    Rs.{data.discounted_price}
                  </Typography>
                  <Typography
                    color="gray"
                    align="left"
                    component="p"
                    fontSize={18}
                    sx={{
                      marginRight: '15px',
                      textDecoration: 'line-through',
                    }}
                  >
                    Rs.{data.original_price}
                  </Typography>
                  <Typography
                    color="green"
                    align="left"
                    component="p"
                    sx={{ fontSize: '20px', marginBottom: '1%' }}
                  >
                    {100 -
                      Math.floor(
                        (data.discounted_price / data.original_price) * 100,
                      )}
                    % off
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '3px',
                    marginBottom: '2%',
                  }}
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    color="greenT2"
                    iconSize="20"
                    style={{ paddingRight: '3px' }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z"
                      fill="#06A759"
                    ></path>
                  </svg>
                  <Typography fontSize={'18px'}>
                    Rs.100 off on 1st order
                  </Typography>
                </Grid>
                {data.discountedPrice > 300 ? (
                  <Typography
                    align="left"
                    component="p"
                    sx={{
                      padding: '1px 2px',
                      backgroundColor: 'rgb(249, 249, 249)',
                      width: 'fit-content',
                      fontSize: '20px',
                      borderRadius: '5px',
                      marginBottom: '1%',
                    }}
                  >
                    free Delivery
                  </Typography>
                ) : (
                  <Typography
                    align="left"
                    component="p"
                    sx={{
                      padding: '1px 2px',
                      backgroundColor: 'rgb(249, 249, 249)',
                      width: 'fit-content',
                      fontSize: '14px',
                      borderRadius: '5px',
                      marginBottom: '1%',
                    }}
                  >
                    Delivery Rs.70
                  </Typography>
                )}

                <Grid
                  sx={{
                    display: 'flex',
                    alignContent: 'flex-start',
                    fontSize: '14px',
                    alignItems: 'center',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    color="white"
                    align="left"
                    component="p"
                    sx={{
                      padding: '5px 10px',
                      width: 'fit-content',
                      fontSize: '18px',
                      borderRadius: '40px',
                      border: '1px solid rgb(249, 249, 249)',
                      marginTop: '5px',
                      marginRight: '8px',

                      backgroundColor: ratingBgColor,
                    }}
                  >
                    {data.rating} &#9733;
                  </Typography>
                  <Typography
                    align="left"
                    component="p"
                    fontSize={18}
                    color={'gray'}
                  >
                    Reviews
                  </Typography>
                </Grid>
              </CardContent>
            ) : (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={708}
                height={600}
              />
            )}
          </Card>

          <Card
            sx={{
              marginBottom: '4%',
              border: '1px solid rgb(240, 240, 240)',
              borderRadius: '8px',
              boxShadow: 'none',
            }}
          >
            <CardContent>
              <Typography fontWeight={700} fontSize={24}>
                Select Size
              </Typography>
            </CardContent>
            <CardContent>
              {data.sizes &&
                data.sizes.map((size) => (
                  <Button
                    variant="outlined"
                    dissableRipple
                    sx={{
                      backgroundColor: 'rgba(244, 51, 151,0.2)',
                      color: 'rgb(244, 51, 151)',
                      marginRight: '15px',
                      borderRadius: '40px',
                      marginBottom: '2%',
                      fontSize: '14px',
                      fontWeight: '500',
                      ':hover': {
                        backgroundColor: 'rgba(244, 51, 151,0.2)',
                        color: 'rgb(244, 51, 151)',
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    {size}
                  </Button>
                ))}
            </CardContent>
          </Card>

          <Card
            sx={{
              marginBottom: '4%',
              border: '1px solid rgb(240, 240, 240)',
              borderRadius: '8px',
              boxShadow: 'none',
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={700} marginBottom="1%">
                Product Details
              </Typography>
              {productDetailsArray.map((detail) => (
                <Typography color="gray" fontSize="18px">
                  {detail[0]}: {detail[1]}
                </Typography>
              ))}
            </CardContent>
          </Card>
          <Card
            sx={{
              marginBottom: '4%',
              border: '1px solid rgb(240, 240, 240)',
              borderRadius: '8px',
              boxShadow: 'none',
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={700} marginBottom="1%">
                Product Ratings & Reviews
              </Typography>

              <Box
                display={'flex'}
                sx={{
                  justifyItems: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  display={'flex'}
                  sx={{
                    flexDirection: 'column',
                    justifyItems: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    align="left"
                    variant="h3"
                    sx={{
                      padding: '5px 10px',
                      width: 'fit-content',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '40px',

                      marginTop: '5px',
                      marginRight: '8px',

                      color: ratingBgColor,
                    }}
                  >
                    {data.rating}
                    <span style={{ marginTop: '-8px', fontSize: '28px' }}>
                      &#9733;
                    </span>
                  </Typography>
                  <Typography
                    align="left"
                    component="p"
                    fontSize={'12px'}
                    color={'gray'}
                  >
                    31 Ratings,
                  </Typography>
                  <Typography
                    align="left"
                    component="p"
                    fontSize={'12px'}
                    color={'gray'}
                  >
                    6 Reviews
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', fontSize: '12px' }}>
                  <Box
                    display="flex"
                    sx={{
                      justifyItems: 'center',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      width: '90%',
                      margin: '2% 0%',
                    }}
                  >
                    <span>Excellent</span>
                    <div
                      style={{
                        backgroundColor: 'gray',
                        width: '70%',
                        borderRadius: '8px',
                        marginLeft: '5%',
                        height: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '70%',
                          height: '4px',
                          backgroundColor: 'green',
                          borderRadius: '8px',
                        }}
                      ></div>
                    </div>
                    <div style={{ paddingLeft: '3%', color: 'gray' }}>12</div>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      justifyItems: 'center',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      width: '90%',
                      margin: '2% 0%',
                    }}
                  >
                    <span>Very Good</span>
                    <div
                      style={{
                        backgroundColor: 'gray',
                        width: '70%',
                        borderRadius: '8px',
                        marginLeft: '5%',
                        height: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '70%',
                          height: '4px',
                          backgroundColor: 'rgb(6, 167, 89)',
                          borderRadius: '8px',
                        }}
                      ></div>
                    </div>
                    <div style={{ paddingLeft: '3%', color: 'gray' }}>12</div>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      justifyItems: 'center',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      width: '90%',
                      margin: '2% 0%',
                    }}
                  >
                    <span>Good</span>
                    <div
                      style={{
                        backgroundColor: 'gray',
                        width: '70%',
                        borderRadius: '8px',
                        marginLeft: '5%',
                        height: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '70%',
                          height: '4px',
                          backgroundColor: 'orange',
                          borderRadius: '8px',
                        }}
                      ></div>
                    </div>
                    <div style={{ paddingLeft: '3%', color: 'gray' }}>12</div>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      justifyItems: 'center',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      width: '90%',
                      margin: '2% 0%',
                    }}
                  >
                    <span>Average</span>
                    <div
                      style={{
                        backgroundColor: 'gray',
                        width: '70%',
                        borderRadius: '8px',
                        marginLeft: '5%',
                        height: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '70%',
                          height: '4px',
                          backgroundColor: 'rgb(236, 128, 61)',
                          borderRadius: '8px',
                        }}
                      ></div>
                    </div>
                    <div style={{ paddingLeft: '3%', color: 'gray' }}>8</div>
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      justifyItems: 'center',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      width: '90%',
                      margin: '2% 0%',
                    }}
                  >
                    <span>Poor</span>
                    <div
                      style={{
                        backgroundColor: 'gray',
                        width: '70%',
                        borderRadius: '8px',
                        marginLeft: '5%',
                        height: '4px',
                      }}
                    >
                      <div
                        style={{
                          width: '10%',
                          height: '4px',
                          backgroundColor: 'red',
                          borderRadius: '8px',
                        }}
                      ></div>
                    </div>
                    <div style={{ paddingLeft: '3%', color: 'gray' }}>3</div>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <hr
              style={{
                margin: '2% 4%',
                border: 'none',
                borderBottom: '1px solid rgb(201, 201, 201)',
              }}
            />
            <CardContent>
              <Typography color="rgb(102, 102, 102)" fontWeight={'700'}>
                <svg
                  width="20"
                  height="20"
                  fill="rgb(231 231 231)"
                  xmlns="http://www.w3.org/2000/svg"
                  iconSize="24"
                  class="Icon-sc-1iwi4w1-0 dbskvy"
                  style={{ margin: '0% 2% -2px 0%' }}
                >
                  <path d="M18.955 17.921c0-.018-.009-.045-.009-.063-.387-3.123-2.871-5.697-6.201-6.624a4.92 4.92 0 01-2.745.837 4.992 4.992 0 01-2.745-.837c-3.33.927-5.814 3.501-6.201 6.624 0 .018-.009.045-.009.063a7.297 7.297 0 00-.045.774C1 19.424 1.702 20 2.521 20h14.958c.819 0 1.521-.576 1.521-1.305 0-.261-.018-.522-.045-.774zM10 11.134c2.598 0 4.707-2.048 4.707-4.567S12.597 2 10 2 5.294 4.048 5.294 6.567c0 2.528 2.11 4.567 4.706 4.567z"></path>
                </svg>
                Sumathi Phillips
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  color="white"
                  align="left"
                  component="p"
                  sx={{
                    padding: '5px 10px',
                    width: 'fit-content',
                    fontSize: '16px',
                    borderRadius: '40px',
                    border: '1px solid rgb(249, 249, 249)',
                    marginTop: '5px',
                    marginRight: '8px',

                    backgroundColor: 'rgb(236, 128, 61)',
                  }}
                >
                  2 &#9733;
                </Typography>
                <Typography
                  align="left"
                  component="p"
                  fontSize={12}
                  color={'gray'}
                >
                  Posted on Oct 2021
                </Typography>
              </Box>
              <Typography marginTop={'2%'}>
                Stitches are lose but it's okay as material wise one time use is
                okay
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '2%',
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="rgb(231 231 231)"
                  xmlns="http://www.w3.org/2000/svg"
                  size="16"
                  iconSize="20"
                  height={'20px'}
                  style={{ margin: '0% 3% 0% 0%' }}
                  class="Icon-sc-1iwi4w1-0 fsYLEx"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.712 5.245L8.68 1.13a1.039 1.039 0 011.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943z"
                    fill="#666"
                  ></path>
                </svg>
                <Typography
                  align="left"
                  component="p"
                  fontSize={12}
                  color={'gray'}
                >
                  Helpful (2)
                </Typography>
              </Box>
            </CardContent>
            <hr
              style={{
                margin: '2% 4%',
                border: 'none',
                borderBottom: '1px solid rgb(201, 201, 201)',
              }}
            />
            <CardContent>
              <Typography color="rgb(102, 102, 102)" fontWeight={'700'}>
                <svg
                  width="20"
                  height="20"
                  fill="rgb(231 231 231)"
                  xmlns="http://www.w3.org/2000/svg"
                  iconSize="24"
                  class="Icon-sc-1iwi4w1-0 dbskvy"
                  style={{ margin: '0% 2% -2px 0%' }}
                >
                  <path d="M18.955 17.921c0-.018-.009-.045-.009-.063-.387-3.123-2.871-5.697-6.201-6.624a4.92 4.92 0 01-2.745.837 4.992 4.992 0 01-2.745-.837c-3.33.927-5.814 3.501-6.201 6.624 0 .018-.009.045-.009.063a7.297 7.297 0 00-.045.774C1 19.424 1.702 20 2.521 20h14.958c.819 0 1.521-.576 1.521-1.305 0-.261-.018-.522-.045-.774zM10 11.134c2.598 0 4.707-2.048 4.707-4.567S12.597 2 10 2 5.294 4.048 5.294 6.567c0 2.528 2.11 4.567 4.706 4.567z"></path>
                </svg>
                Aniket Chauhan
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  color="white"
                  align="left"
                  component="p"
                  sx={{
                    padding: '5px 10px',
                    width: 'fit-content',
                    fontSize: '16px',
                    borderRadius: '40px',
                    border: '1px solid rgb(249, 249, 249)',
                    marginTop: '5px',
                    marginRight: '8px',

                    backgroundColor: ratingBgColor,
                  }}
                >
                  4 &#9733;
                </Typography>
                <Typography
                  align="left"
                  component="p"
                  fontSize={12}
                  color={'gray'}
                >
                  Posted on Oct 2021
                </Typography>
              </Box>
              <Typography marginTop={'2%'}>Nice</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '2%',
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="rgb(231 231 231)"
                  xmlns="http://www.w3.org/2000/svg"
                  size="16"
                  iconSize="20"
                  height={'20px'}
                  style={{ margin: '0% 3% 0% 0%' }}
                  class="Icon-sc-1iwi4w1-0 fsYLEx"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.712 5.245L8.68 1.13a1.039 1.039 0 011.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943z"
                    fill="#666"
                  ></path>
                </svg>
                <Typography
                  align="left"
                  component="p"
                  fontSize={12}
                  color={'gray'}
                >
                  Helpful (2)
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'Flex',
              alignItems: 'center',
              justifyItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'rgb(231, 238, 255)',
              padding: '4% 1%',
              borderRadius: '3%',
            }}
          >
            <LocalOfferOutlined htmlColor="rgb(244,51,151)" />
            <Typography fontSize="14px">Lowest Price</Typography>
            <hr
              style={{
                width: '1px',
                height: '2em',
                border: 'none',
                borderLeft: '1px solid white',
              }}
            />
            <AssignmentReturnOutlined htmlColor="rgb(244,51,151)" />
            <Typography fontSize="14px">7 Day Return</Typography>
            <hr
              style={{
                width: '1px',
                height: '2em',
                border: 'none',
                borderLeft: '1px solid white',
              }}
            />

            <div>
              <AttachMoneyOutlined htmlColor="rgb(244,51,151)" />
            </div>
            <Typography fontSize="14px">Cash on Delivery</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
