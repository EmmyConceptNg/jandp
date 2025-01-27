import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { inputClasses } from '@mui/material/Input';
import { alpha, useTheme } from '@mui/material/styles';

import { _brands } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

import FilterKeyword from '../filters/filter-keyword';
import FilterLocation from '../filters/filter-location';

// ----------------------------------------------------------------------

export default function CareerLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState({
    filterKeyword: null,
    filterLocation: null,
  });

  const renderSummary = (
    <Stack
      spacing={3}
      direction={{ xs: 'column', md: 'row' }}
      divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      sx={{ pt: { md: 5 } }}
    >
      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(108)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Projekte
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">€ {fShortenNumber(10000000)}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Umsatz
          </Typography>
        </Stack>
      </Stack>

      <Stack
        spacing={{ md: 3 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(22)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Aktuelle Projekte
          </Typography>
        </Stack>

        <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
          <Typography variant="h4">{fShortenNumber(50)}+</Typography>
          <Typography variant="body2" sx={{ opacity: 0.48 }}>
            Mitarbeiter
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderBrands = (
    <Stack
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      sx={{
        mt: { md: 1 },
      }}
    >
      {_brands.slice(0, 4).map((brand) => (
        <Box
          key={brand.id}
          sx={{
            lineHeight: 0,
            my: { xs: 1.5, md: 0.5 },
            mr: { md: 3 },
            width: { xs: 0.5, md: 'auto' },
            '&:last-of-type': {
              mr: 0,
            },
          }}
        >
          <SvgColor
            src={brand.image}
            sx={{
              width: 94,
              height: 28,
              color: 'text.disabled',
            }}
          />
        </Box>
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/bg.avif',
        }),
        pt: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={6}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h2" sx={{ color: 'common.white' }}>
                  Willkommen bei
                </Typography>
                <Typography variant="h1" sx={{ color: '#FA541C', mt: 0 }}>
                  J&P Globe Trade
                </Typography>

                <Typography sx={{ color: 'grey.500' }}>
                  Ihrem führenden Partner für Bau-Dienstleistungen für Ihr Traumhaus!
                  {/* Bei J&P Globe Trade setzen wir uns dafür ein, Ihre Vision in die Realität
                  umzusetzen. Als vertrauenswürdiges und erfahrenes Bauunternehmen sind wir darauf
                  spezialisiert, hochwertige Wohnprojekte zu liefern, die genau auf Ihre
                  individuellen Bedürfnisse zugeschnitten sind. Egal, ob Sie Ihr Traumhaus von Grund
                  auf neu bauen oder eine bestehende Immobilie renovieren möchten - wir haben die
                  Lösung für Sie. */}
                </Typography>
                {!mdUp && (
                  <Grid xs={12} md={6} lg={6}>
                    <CareerHeroIllustration />
                  </Grid>
                )}
                <Button fullWidth variant="contained" size="large" color="primary">
                  Loslegen
                </Button>
              </Stack>

              {renderBrands}

              {renderSummary}
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={6}>
              <CareerHeroIllustration />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
