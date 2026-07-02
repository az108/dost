package de.silvamed.drdost.ui

import android.graphics.BitmapFactory
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.produceState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

/** Renders an image bundled under shared/assets/<path> (APK path assets/<path>).
 *  Falls back to a warm gradient, matching the website's imageless topics. */
@Composable
fun AssetImage(
    path: String?,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    contentScale: ContentScale = ContentScale.Crop,
) {
    val context = LocalContext.current
    val bitmap by produceState<ImageBitmap?>(initialValue = null, path) {
        value = if (path == null) null else withContext(Dispatchers.IO) {
            runCatching {
                context.assets.open("assets/$path").use { BitmapFactory.decodeStream(it) }
            }.getOrNull()?.asImageBitmap()
        }
    }
    val loaded = bitmap
    if (loaded != null) {
        Image(loaded, contentDescription, modifier, contentScale = contentScale)
    } else {
        Box(modifier.background(Brush.linearGradient(listOf(Color(0xFFEDE3D4), Color(0xFFD1BDA3)))))
    }
}
