package de.silvamed.drdost.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.rememberTransformableState
import androidx.compose.foundation.gestures.transformable
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.GalleryImage

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun GalerieScreen(images: List<GalleryImage>, onOpen: (Int) -> Unit) {
    Scaffold(topBar = { TopAppBar(title = { Text("Galerie") }) }) { padding ->
        LazyVerticalGrid(
            columns = GridCells.Adaptive(minSize = 150.dp),
            contentPadding = padding,
            modifier = Modifier.padding(horizontal = 8.dp),
        ) {
            itemsIndexed(images, key = { _, image -> image.image }) { index, image ->
                AssetImage(
                    path = image.image,
                    contentDescription = image.alt,
                    modifier = Modifier
                        .padding(4.dp)
                        .aspectRatio(1f)
                        .clip(RoundedCornerShape(12.dp))
                        .clickable { onOpen(index) },
                )
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PhotoViewerScreen(images: List<GalleryImage>, initialIndex: Int, onClose: () -> Unit) {
    val pagerState = rememberPagerState(initialPage = initialIndex.coerceIn(0, images.lastIndex)) {
        images.size
    }
    Scaffold(topBar = {
        TopAppBar(
            title = {},
            navigationIcon = {
                IconButton(onClick = onClose) {
                    Icon(Icons.Filled.Close, contentDescription = "Schließen")
                }
            },
        )
    }) { padding ->
        HorizontalPager(
            state = pagerState,
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .background(Color.Black),
        ) { page ->
            ZoomableAssetImage(images[page].image, images[page].alt)
        }
    }
}

@Composable
private fun ZoomableAssetImage(path: String, contentDescription: String) {
    var scale by remember { mutableFloatStateOf(1f) }
    val transformState = rememberTransformableState { zoom, _, _ ->
        scale = (scale * zoom).coerceIn(1f, 4f)
    }
    AssetImage(
        path = path,
        contentDescription = contentDescription,
        contentScale = ContentScale.Fit,
        modifier = Modifier
            .fillMaxSize()
            .graphicsLayer(scaleX = scale, scaleY = scale)
            .transformable(transformState),
    )
}
