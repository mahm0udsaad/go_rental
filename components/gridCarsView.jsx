import { useState, useEffect } from 'react';
import {
    Grid,
    Paper,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Skeleton,
} from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';

export const GridView = ({ data, lng, cars }) => {
  const { t } = useTranslation(lng, 'dashboard');
  const [isLoading, setIsLoading] = useState(true); 

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleGridItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };


  const GridItem = ({ item }) => {

    const renderModalContent = () => {
        if (!selectedItem) return null;
        console.log(selectedItem);
        return (
          <Modal open={!!selectedItem} onClose={handleCloseModal}
           sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card sx={{ width: '80%' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {selectedItem.plateNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {selectedItem.brand}
                </Typography>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="details">
                    <TableBody>
                      {Object.entries(selectedItem).map(([key, value], index) => {
                        if (index % 3 === 0) {
                          return (
                            <TableRow key={key}>
                            <TableCell>{t(`tables.${key}`)}</TableCell>
                            <TableCell>{value}</TableCell>
                            {index + 1 < Object.keys(selectedItem).length && (
                                <>
                                <TableCell>{t(`tables.${Object.keys(selectedItem)[index + 1]}`)}</TableCell>
                                <TableCell>{selectedItem[Object.keys(selectedItem)[index + 1]]}</TableCell>
                                </>
                            )}
                            {index + 2 < Object.keys(selectedItem).length && (
                                <>
                                <TableCell>{t(`tables.${Object.keys(selectedItem)[index + 2]}`)}</TableCell>
                                <TableCell>{selectedItem[Object.keys(selectedItem)[index + 2]]}</TableCell>
                                </>
                            )}
                            </TableRow>
                          );
                        }
                        return null;
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="error" onClick={handleCloseModal}>Close</Button>
              </CardActions>
            </Card>
          </Modal>
        );
      };
    return (
      <Grid  item lg={2} md={6} sm={12}> 
        <Card >
          <CardMedia
            component="img"
            height="140"
            image="/vehicle.jpg" 
            alt={item.plateNumber}
          />
          <CardContent>
            <h1 className='text-lg'>
              {item.plateNumber}
            </h1>
            <Typography variant="body2" color="text.secondary">
              {item.brand}
            </Typography>
          </CardContent>
          <CardActions>
          <Link href={`dashboard/rent?carId=${item.ID}`} >
             <Button variant="contained" className='text-sm'  size="small">{t('tables.rent')}</Button>
            </Link>
            <Button onClick={() => handleGridItemClick(item)} className='text-sm' size="small">{t(`tables.Details`)}</Button>
          </CardActions>
        </Card>
        {renderModalContent()}
      </Grid>
    );
  };

  return (
    <div className="grid-container view">
      {isLoading ? (
        // Skeleton Loader
        <Grid container spacing={2}>
          {[...Array(8)].map((_, index) => ( // Display 8 skeleton items
            <GridItem key={index} item={{}} />
          ))}
        </Grid>
      ) : (
        // Render Grid Items with data
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </Grid>
      )}
    </div>
  );
};
