import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useGetAllAttractionsByIDQuery } from '@/services/attraction';
import { useSelector } from 'react-redux'


const MediaCard = () => {

    const useStore = useSelector((state) => state.useStore.value);
    const { data, error, isLoading } = useGetAllAttractionsByIDQuery(useStore)

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <Card >
                        <Grid container >
                            <Grid item xs={6}>
                                <CardMedia
                                    sx={{ height: 450 }}
                                    image={data.attraction.coverimage}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.attraction.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.attraction.detail}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </>
            ) : null
            }

        </div >
    )
}
export default MediaCard
